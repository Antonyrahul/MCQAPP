import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
name;
jwtToken;
isTeacher;
  constructor(private router:Router) {
   
   }

  ngOnInit(): void {
    this.isTeacher="false"
    this.name = localStorage.getItem("name")
    if(this.name == undefined)
    this.name = "Guest User"
    this.jwtToken = localStorage.getItem("jwtToken")
    this.isTeacher= localStorage.getItem("isTeacher")
    console.log(this.isTeacher)
  }
  logoutuser()
  {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('jwtToken');
    localStorage.removeItem("isTeacher");
    localStorage.removeItem("testname")
    this.router.navigate([''])
    location.reload();
    


  }

}
