import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private client: HttpClient) { }
  
  firstClick(){
    return console.log("Hello form Service click!");
  }

  getUsers(){
    const apiURL = "https://reqres.in/api/users";
    return this.client.get(apiURL);
  }
}
