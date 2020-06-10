import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import {ActivatedRoute,Router,ParamMap} from '@angular/router'

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {
prod;
takentest;
currenttab = "availtest"
  constructor(private productservice :ProductService, private router:Router) { 
    if(localStorage.getItem("jwtToken")==null)
    {
      this.router.navigate(['login'])
    }
    if(localStorage.getItem("isTeacher")=="true")
    {
      this.router.navigate(['teachersdashboard'])
    }
    console.log("in")
    this.productservice.getTests('').subscribe((data)=>{
      console.log(data.data)
      this.prod = data.data
  })
  var userdetails={
    email:localStorage.getItem("email")
  }

  this.productservice.getTakentests(userdetails).subscribe((res)=>{
    console.log(res.data)
    this.takentest = res.data
})

  }

  ngOnInit(): void {
  }
  getAvailableTests()
  
  {
    console.log("avail")
    this.currenttab = "availtest"

   
  }
  
  getTakenTests()
  {
    console.log("taken")
    this.currenttab = "takentest"
  }
 

}
//https://twitter.com/intent/tweet?text=Hello%20world
