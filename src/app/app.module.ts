import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { QuestionsComponent } from './questions/questions.component';
import { AddquestionpaperComponent } from './addquestionpaper/addquestionpaper.component';
import { TeachersDashboardComponent } from './teachers-dashboard/teachers-dashboard.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { SheetComponent } from './sheet/sheet.component';
import { QuestionsheetComponent } from './questionsheet/questionsheet.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    QuestionsComponent,
    AddquestionpaperComponent,
    TeachersDashboardComponent,
    StudentdashboardComponent,
    SheetComponent,
    QuestionsheetComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
