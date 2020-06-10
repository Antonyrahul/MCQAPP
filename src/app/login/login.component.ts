import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from'@angular/forms';
import {ProductService} from '../product.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform;
message;
  constructor(private productservice:ProductService,private router:Router) { 
    this.loginform = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      teacher:new FormControl()
     
      
    })
  }

  ngOnInit(): void {
  }

  processdata()
  {
    if(this.loginform.valid)
    console.log(this.loginform.value)
    this.productservice.loginUser(this.loginform.value).subscribe((data)=>{
      console.log(data)
      this.message = data.message
      this.toastmessage();

      if(data.status ==200)
      {
        this.message = "login success"
      this.toastmessage();
      console.log("logged in")
      localStorage.setItem('name', data.name);
      localStorage.setItem('email',data.email);
      localStorage.setItem('jwtToken',data.jwttoken)
      localStorage.setItem('isTeacher',this.loginform.value.teacher)
      
      this.router.navigate(['/'])
      .then(() => {
        window.location.reload();
      });
      }
      else
      {
      console.log("failed")
      this.message = "Incorrect username or password"
      this.toastmessage();
      }

    })
  }
    // Get the snackbar DIV
   toastmessage() {
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

}
