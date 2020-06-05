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
  constructor(private productservice:ProductService,private router:Router,private activatedroute:ActivatedRoute) {
    this.registerform = new FormGroup({
      question : new FormControl('',Validators.required),
      option1 : new FormControl('',Validators.required),
      option2 : new FormControl('',Validators.required),
      option3 : new FormControl('',Validators.required),
      option4 : new FormControl('',Validators.required),
      answer:new FormControl('',Validators.required),
      

   })
  }
 

  ngOnInit(): void {
    
  }
  processdata()
  {
   
    if(this.registerform.valid){
    console.log(this.registerform.value)
    this.questionsArray.push(this.registerform.value)
    this.questionNumber++;
    console.log(this.questionsArray)
    }
   
    //this.productservice.registerUser(this.registerform.value).subscribe((data)=>{
     // console.log(data)
     // this.router.navigate(['login'])

   // })
  }
  saveQuestionPapaer()
  {
    var data = {
      email:localStorage.getItem("name"),
      testname : localStorage.getItem("testname"),
      testid : this.activatedroute.snapshot.params.id,
      questionpaper:this.questionsArray
    }
    this.productservice.saveQuestionPaper(data).subscribe((data)=>{
       console.log(data)
       //this.router.navigate(['login'])
 
     })
  }

}
