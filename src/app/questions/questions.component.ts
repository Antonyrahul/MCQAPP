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
  status="pass";
  option1;
  option2;
  option3;
  option4;
  questionform;
  correctquestioncount =0;
  testname;
  isfinished=false;
  isstart = false;
  answersheet= [];
  timeelapsed=0;
  myTimer;
  message;
  cheatcount = 0;
  constructor(private productservice :ProductService, private activatedroute:ActivatedRoute,private router:Router) { 
    window.onblur = this.userCheated;
    if(localStorage.getItem("jwtToken")==null)
    {
      this.router.navigate(['login'])
    }
    if(localStorage.getItem("isTeacher")=="true")
    {
      this.router.navigate(['teachersdashboard'])
    }

    this.questionform = new FormGroup({
      Option1:new FormControl(),
      Option2:new FormControl(),
      Option3:new FormControl(),
      Option4:new FormControl(),
     
      
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
  var routerurl = 'sheet/'+this.testid
  this.router.navigate([routerurl])
  
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
    this.questionform.reset()
  }
  evaluate()
  {
    this.buildAnssheet();
    this.stop()
    this.isfinished = true;
    console.log(this.answersheet)
    if(this.correctquestioncount<5)
    {
      this.status= "fail";
    }
    var data = 
    {
      email:localStorage.getItem("email"),
      testid:this.testid,
      testname:this.testname,
      answesheet:this.answersheet,
      status :this.status,
      correctanswers:this.correctquestioncount,
      timetaken:this.timeelapsed,
      cheatcount:this.cheatcount

      
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
  var ansarray =[];
  var answerstatus = "wrong"
  for(var i in this.questionform.value)
  {
    if(this.questionform.value[i] == true)
    ansarray.push(i)
  }
  var answer =this.prod[this.index]["answer"];
  console.log(this.questionform.value[answer])
  console.log(ansarray)
  console.log(answer)
  if(JSON.stringify(ansarray) == JSON.stringify(answer))
  {
    //if(JSON.stringify(a)==JSON.stringify(b))
    answerstatus = "correct"
    this.correctquestioncount++;
    this.message = "Correct Answer"
    this.toastmessage();

    console.log("correct answer")
  }
  else
  {
    this.message = "Wrong Answer"
    this.toastmessage();
    
  }
  // for(var i in this.questionform.value)
  // {
  //   if(this.questionform.value[i] == true)
  //   ansarray.push(i)
  // }
  var data={
    question:this.questiontodisplay,
    Option1:this.option1,
    Option2:this.option2,
    Option3:this.option3,
    Option4:this.option4,
    answer:ansarray,
    answerstatus:answerstatus

  }
  this.answersheet.push(data)
}
starttest()
{
 

this.start();

  this.isstart = true
}




 start() {
    
       this.myTimer= setInterval(()=>{this.timeelapsed++}, 1000);
    
}

 stop() {
    
        clearInterval(this.myTimer)
      
    
}
toastmessage() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}
userCheated=()=>{
  if(this.isfinished == false)
  {
  this.message = "Dont move from the page"
  this.toastmessage()
  this.cheatcount++;
  }
}


}
//https://twitter.com/intent/tweet?text=Hello%20world
