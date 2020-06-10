import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import {ActivatedRoute,Router,ParamMap} from '@angular/router'

@Component({
  selector: 'app-questionsheet',
  templateUrl: './questionsheet.component.html',
  styleUrls: ['./questionsheet.component.css']
})
export class QuestionsheetComponent implements OnInit {

  testid;
  answersheet;
  testname;
  teststatus;
  timetaken;
  prod;
  index =0;
  constructor(private productservice :ProductService, private activatedroute:ActivatedRoute,private router:Router) {

   
      if(localStorage.getItem("jwtToken")==null)
      {
        this.router.navigate(['login'])
      }
      if(localStorage.getItem("isTeacher")==null||localStorage.getItem("isTeacher")=="null")
      {
        this.router.navigate(['studentdashboard'])
      }
    
    this.testid = this.activatedroute.snapshot.params.id

    this.productservice.getQuestionPaper({testid:this.testid}).subscribe((data)=>{
      console.log(data.data.questionpaper)
      this.testname= data.data.testname
      this.prod = data.data.questionpaper
      console.log(this.prod.length)
      console.log(this.prod[this.index]["question"])
    //   this.questiontodisplay = this.prod[this.index]["question"]
    //   this.option1 = this.prod[this.index]["option1"]
    //  this.option2 =this.prod[this.index]["option2"]
    // this.option3=  this.prod[this.index]["option3"]
    //  this.option4= this.prod[this.index]["option4"]
     
 
  })
  }

  ngOnInit(): void {
  }

}