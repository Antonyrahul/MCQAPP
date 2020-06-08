import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component'
import {QuestionsComponent} from './questions/questions.component'
import {AddquestionpaperComponent} from './addquestionpaper/addquestionpaper.component'
import {TeachersDashboardComponent} from './teachers-dashboard/teachers-dashboard.component'
import {StudentdashboardComponent} from './studentdashboard/studentdashboard.component'


const routes: Routes = [
  {
    path :"login",
    component:LoginComponent
  },
  {
    path :"register",
    component:RegisterComponent
  },
  {
    path:"questions",
    component:QuestionsComponent
  },
  {
    path:"addquestionpaper/:id",
    component:AddquestionpaperComponent
  },
  {  path:"teachersdashboard",
     component :TeachersDashboardComponent
  },
  {
    path:"studentdashboard",
    component:StudentdashboardComponent
  },
  {
    path:"test/:id",
    component:QuestionsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
