import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import {ActivatedRoute,Router,ParamMap} from '@angular/router'

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {
  testid;
  answersheet;
  testname;
  teststatus;
  timetaken;
  cheatcount=0;
  constructor(private productservice :ProductService, private activatedroute:ActivatedRoute,private router:Router) {
    if(localStorage.getItem("jwtToken")==null)
    {
      this.router.navigate(['login'])
    }
    if(localStorage.getItem("isTeacher")=="true")
    {
      this.router.navigate(['teachersdashboard'])
    }

    this.testid = this.activatedroute.snapshot.params.id
    var data = 
    {
      email:localStorage.getItem("email"),
      testid:this.testid
    }
    this.productservice.getAnswerSheet(data).subscribe((res)=>{
      console.log(res.data)
      this.testname = res.data.testname
      this.teststatus= res.data.status
      this.answersheet = res.data.answesheet;
      this.timetaken= res.data.timetaken
      this.cheatcount =res.data.cheatcount
  })
  }

  ngOnInit(): void {
  }

}
