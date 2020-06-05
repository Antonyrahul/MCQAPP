import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component'
import {QuestionsComponent} from './questions/questions.component'
import {AddquestionpaperComponent} from './addquestionpaper/addquestionpaper.component'
import {TeachersDashboardComponent} from './teachers-dashboard/teachers-dashboard.component'



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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
