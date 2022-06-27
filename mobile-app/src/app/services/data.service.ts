import { Injectable } from '@angular/core';
import {Item} from 'src/app/interfaces/item';
import {Review} from 'src/app/interfaces/review'
import { HttpClient } from "@angular/common/http";
import {AboutUs} from "../interfaces/about-us";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  getItems() {
    return this.httpClient.get<Item[]>('https://restaurant-capstone6263.herokuapp.com/items');
  }
  getItem(){
    return this.httpClient.get<Item[]>('https://restaurant-capstone6263.herokuapp.com/employees/items/:id/')
  }
  createReview(formData:any){
    return this.httpClient.post('https://restaurant-capstone6263.herokuapp.com/addreview', formData)
  }
  createItem(formData:any){
    return this.httpClient.post('https://restaurant-capstone6263.herokuapp.com/employees/additem', formData)
  }
  updateItem(id:any,formData:any){
    return this.httpClient.patch<Item[]>(`https://restaurant-capstone6263.herokuapp.com/employees/updateitem/${id}`,formData);
  }
  deleteItem(id:number){
    return this.httpClient.delete<Item[]>(`https://restaurant-capstone6263.herokuapp.com/employees/deleteitem/${id}`);
  }

  getItemById(id:any){
    return this.httpClient.get(`https://restaurant-capstone6263.herokuapp.com/employees/items/${id}`)
  }

  register(formData:any){
    return this.httpClient.post('https://restaurant-capstone6263.herokuapp.com/employees/register', formData)
  }
  login(formData:any){
    return this.httpClient.post('https://restaurant-capstone6263.herokuapp.com/employees/login', formData)
  }
  get_current_employee(){
    return JSON.parse(localStorage.getItem('currentEmployee')!)
  }
  isAuthenticated(){
    return this.get_current_employee() ? true: false
  }

  getReviews() {
    return this.httpClient.get<Review[]>('https://restaurant-capstone6263.herokuapp.com/reviews');
  }

  getAboutUs() {
    return this.httpClient.get<AboutUs[]>('https://restaurant-capstone6263.herokuapp.com/reviews');
  }

  createFeedback(formData:any){
    return this.httpClient.post('https://restaurant-capstone6263.herokuapp.com/addcontact/', formData)
  }
}

