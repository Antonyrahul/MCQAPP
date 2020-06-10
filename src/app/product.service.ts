import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  loginUser(data):Observable<any>{
    console.log(data)
    return this.http.post("https://testappantony.herokuapp.com/loginuser",data)
  }
  registerUser(data):Observable<any>{
    console.log(data)
    return this.http.post("https://testappantony.herokuapp.com/registeruser",data)
  }
  saveQuestionPaper(data):Observable<any>
  {
    console.log(data)
    return this.http.post("https://testappantony.herokuapp.com/savequestionpaper",data)
  }
  genTestId():Observable<any>
  {
    return this.http.get("https://testappantony.herokuapp.com/generatetestid")
  }
  getTests(data):Observable<any>
  {
    return this.http.post("https://testappantony.herokuapp.com/getavailabletests",data)
  }
  getQuestionPaper(data):Observable<any>
  {
    return this.http.post("https://testappantony.herokuapp.com/getquestionpaper",data)
  }
  saveAnswerSheet(data):Observable<any>
  {
    console.log(data)
    return this.http.post("https://testappantony.herokuapp.com/saveanswersheet",data)
  }
  updateTestIdInStudentDB(data):Observable<any>
  {
    console.log(data)
    return this.http.post("https://testappantony.herokuapp.com/updateTestIdInStudentDB",data)
  }
  
  verifyTestEligibility(data):Observable<any>
 {
      return  this.http.post("https://testappantony.herokuapp.com/verifytesteligible",data)
 }

 getTakentests(data):Observable<any>
 {
    return this.http.post("https://testappantony.herokuapp.com/gettakentests",data)
 }

 getAnswerSheet(data):Observable<any>
 {
   return this.http.post("https://testappantony.herokuapp.com/getanswersheet",data)
 }
  
}
