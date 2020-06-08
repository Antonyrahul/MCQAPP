import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {
prod;
  constructor(private productservice :ProductService) { 
    console.log("in")
    this.productservice.getTests('').subscribe((data)=>{
      console.log(data.data)
      this.prod = data.data
  })
  }

  ngOnInit(): void {
  }

}
