import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
name;
jwtToken;
  constructor() {
   
   }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")
    if(this.name == undefined)
    this.name = "Guest User"
    this.jwtToken = localStorage.getItem("jwtToken")
  }
  logoutuser()
  {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('jwtToken');
    location.reload();


  }

}
