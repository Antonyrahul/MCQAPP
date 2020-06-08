import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import {ActivatedRoute,Router,ParamMap} from '@angular/router'
import {FormGroup,FormControl, Validators} from'@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  prod;
  testid;
  questiontodisplay;
  index=0;
  option1;
  option2;
  option3;
  option4;
  questionform;
  correctquestioncount =0;
  testname;
  isfinished;
  answersheet= [];
  constructor(private productservice :ProductService, private activatedroute:ActivatedRoute,private router:Router) { 
    this.questionform = new FormGroup({
      option1:new FormControl(),
      option2:new FormControl(),
      option3:new FormControl(),
      option4:new FormControl(),
     
      
    })
  }

  ngOnInit(): void {
    console.log("in")
    this.testid = this.activatedroute.snapshot.params.id
    this.productservice.verifyTestEligibility({email:localStorage.getItem("email")}).subscribe((data)=>{
console.log(data);
if(data.data.includes(this.testid))
{
  console.log("test already taken")
  this.router.navigate(['studentdashboard'])
  
}

    })
    this.productservice.getQuestionPaper({testid:this.testid}).subscribe((data)=>{
      console.log(data.data.questionpaper)
      this.testname= data.data.testname
      this.prod = data.data.questionpaper
      console.log(this.prod.length)
      console.log(this.prod[this.index]["question"])
      this.questiontodisplay = this.prod[this.index]["question"]
      this.option1 = this.prod[this.index]["option1"]
     this.option2 =this.prod[this.index]["option2"]
    this.option3=  this.prod[this.index]["option3"]
     this.option4= this.prod[this.index]["option4"]
     
 
  })
  }
  nextquestion()
  {

    this.buildAnssheet();
    console.log("next")
    this.index++
    console.log(this.questionform.value)
  }
  evaluate()
  {
    this.buildAnssheet();

    this.isfinished = true;
    console.log(this.answersheet)
    var data = 
    {
      email:localStorage.getItem("email"),
      testid:this.testid,
      answesheet:this.answersheet,

      
    }
    this.productservice.saveAnswerSheet(data).subscribe((data)=>{
      console.log(data)
      //this.router.navigate(['login'])

    })
    var updatedata =
    {
      email:localStorage.getItem("email"),
      testid:this.testid
    }
    this.productservice.updateTestIdInStudentDB(updatedata).subscribe((data)=>{
      console.log(data)
    })
    
  }
  buildAnssheet()
{
  var answer =this.prod[this.index]["answer"];
  console.log(this.questionform.value[answer])
  if(this.questionform.value[answer] == true)
  {
    this.correctquestioncount++;
    console.log("correct answer")
  }
  var data={
    question:this.questiontodisplay,
    option1:this.option1,
    option2:this.option2,
    option3:this.option3,
    option4:this.option4,
    answer:this.questionform.value

  }
  this.answersheet.push(data)
}

}
