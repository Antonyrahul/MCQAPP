import { Component, OnInit, Input } from '@angular/core';
import {FormGroup,FormControl, Validators} from'@angular/forms';
import {TeachersDashboardComponent} from '../teachers-dashboard/teachers-dashboard.component'
import {ProductService} from '../product.service'
import {ActivatedRoute, Router } from '@angular/router';

import { observable } from 'rxjs';

@Component({
  selector: 'app-addquestionpaper',
  templateUrl: './addquestionpaper.component.html',
  styleUrls: ['./addquestionpaper.component.css']
})
export class AddquestionpaperComponent implements OnInit {
  
  
  registerform;
  questionsArray = [];
  questionNumber = 1;
  finishaddition = false;
  constructor(private productservice:ProductService,private router:Router,private activatedroute:ActivatedRoute) {
    if(localStorage.getItem("jwtToken")==null)
    {
      this.router.navigate(['login'])
    }
    if(localStorage.getItem("isTeacher")==null||localStorage.getItem("isTeacher")=="null")
    {
      this.router.navigate(['studentdashboard'])
    }

    this.registerform = new FormGroup({
      question : new FormControl('',Validators.required),
      option1 : new FormControl('',Validators.required),
      option2 : new FormControl('',Validators.required),
      option3 : new FormControl('',Validators.required),
      option4 : new FormControl('',Validators.required),
      Option1:new FormControl(),
      Option2:new FormControl(),
      Option3:new FormControl(),
      Option4:new FormControl(),
     
      
      

   })
  }
 

  ngOnInit(): void {
    
  }
  processdata()
  {
    var ansarray = []
    for(var i in this.registerform.value)
  {
    console.log(i)
    console.log(this.registerform.value[i])
    if(this.registerform.value[i] === true)
    ansarray.push(i)
  }
 this.registerform.value.answer =ansarray
   
    if(this.registerform.valid){
    console.log(this.registerform.value)
    this.questionsArray.push(this.registerform.value)
    this.questionNumber++;
    this.registerform.reset();
    console.log(this.questionsArray)
    }
   
    //this.productservice.registerUser(this.registerform.value).subscribe((data)=>{
     // console.log(data)
     // this.router.navigate(['login'])

   // })
  }
  saveQuestionPapaer()
  {
    this.finishaddition= true
    this.processdata();
    var data = {
      email:localStorage.getItem("email"),
      testname : localStorage.getItem("testname"),
      testid : this.activatedroute.snapshot.params.id,
      questionpaper:this.questionsArray
    }
    this.productservice.saveQuestionPaper(data).subscribe((data)=>{
       console.log(data)
       this.router.navigate(['teachersdashboard'])
 
     })
  }

}
