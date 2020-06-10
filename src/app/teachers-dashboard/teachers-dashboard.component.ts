import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-teachers-dashboard',
  templateUrl: './teachers-dashboard.component.html',
  styleUrls: ['./teachers-dashboard.component.css']
})
export class TeachersDashboardComponent implements OnInit {
   testname;
  prod;
  email;
  constructor(private productservice:ProductService,private router:Router) {
    if(localStorage.getItem("jwtToken")==null)
    {
      this.router.navigate(['login'])
    }
    if(localStorage.getItem("isTeacher")==null||localStorage.getItem("isTeacher")=="null")
    {
      this.router.navigate(['studentdashboard'])
    }

    console.log("in")
    this.email=localStorage.getItem("email")

    this.productservice.getTests('').subscribe((data)=>{
      console.log(data.data)
      this.prod = data.data
  })
   }

  ngOnInit(): void {
  }
  processdata(testname)
  {
    console.log(testname)
    //this.testnamee = document.getElementById('testname')
    //console.log(this.registerform.value)
    if(testname!="")
    {
    this.productservice.genTestId().subscribe((data)=>{
      console.log(data)
      localStorage.removeItem("testname")
      localStorage.setItem("testname",testname)
      this.router.navigate(['addquestionpaper/'+data.testid])

    })
  }
  }


}
