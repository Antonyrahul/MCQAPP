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

  constructor(private productservice:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  processdata()
  {
    this.testname = document.getElementById('testname')
    //console.log(this.registerform.value)
    this.productservice.genTestId().subscribe((data)=>{
      console.log(data)
      localStorage.removeItem("testname")
      localStorage.setItem("testname",this.testname)
      this.router.navigate(['addquestionpaper/'+data.testid])

    })
  }


}
