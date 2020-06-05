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
    return this.http.post("http://localhost:4123/loginuser",data)
  }
  registerUser(data):Observable<any>{
    console.log(data)
    return this.http.post("http://localhost:4123/registeruser",data)
  }
  saveQuestionPaper(data):Observable<any>
  {
    console.log(data)
    return this.http.post("http://localhost:4123/questionpaper",data)
  }
  genTestId():Observable<any>
  {
    return this.http.get("http://localhost:4123/generatetestid")
  }
}
