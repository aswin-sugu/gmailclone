import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getEmail(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }

  getOutbox(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getUser(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/comments/'+userId)
  }
}
