import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Item} from "../interfaces/item";
import {Review} from '../interfaces/review'
import {ContactForm} from "../interfaces/contact-form";
import {Contact} from "../interfaces/contact";
import {AboutUs} from "../interfaces/about-us";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  getItems() {
    return this.httpClient.get<Item[]>('http://localhost:3000/items');
  }
  // getItem(){
  //   return this.httpClient.get<Item[]>('http://localhost:3000/employees/items/:id/')
  // }
  // getReview(){
  //   return this.httpClient.get<Review[]>('http://localhost:3000/employees/reviews/:id/')
  // }
  createReview(formData:any){
    return this.httpClient.post('http://localhost:3000/addreview', formData)
  }
  createItem(formData:any){
    return this.httpClient.post('http://localhost:3000/employees/additem', formData)
  }
  createContact(formData:any){
    return this.httpClient.post('http://localhost:3000/addcontact', formData)
  }

  updateItem(id:any,formData:any){
    return this.httpClient.patch<Item[]>(`http://localhost:3000/employees/updateitem/${id}`,formData);
  }
  deleteItem(id:number){
    return this.httpClient.delete<Item[]>(`http://localhost:3000/employees/deleteitem/${id}`);
  }

  delete_review(id:number){
    return this.httpClient.delete<Review[]>(`http://localhost:3000/employees/delete_review/${id}`);
  }
  getItemById(id:any){
    return this.httpClient.get(`http://localhost:3000/employees/items/${id}`)
  }
  getReviewById(id:any){
    return this.httpClient.get(`http://localhost:3000/employees/reviews/${id}`)
  }

  getContactInfoById(id:any) {
    return this.httpClient.get(`http://localhost:3000/employees/contact-info/${id}`)
  }

  register(formData:any){
  return this.httpClient.post('http://localhost:3000/employees/register', formData)
  }
  login(formData:any){
    return this.httpClient.post('http://localhost:3000/employees/login', formData)
  }
  get_current_employee(){
    return JSON.parse(localStorage.getItem('currentEmployee')!)
  }
  isAuthenticated(){

    return this.get_current_employee() ? true: false
  }

  getReviews() {
    return this.httpClient.get<Review[]>('http://localhost:3000/reviews');
  }

  getFeedback() {
    return this.httpClient.get<ContactForm[]>('http://localhost:3000/employees/feedback/');
  }
//contact-info
  getContactInfo() {
    return this.httpClient.get<Contact[]>('http://localhost:3000/employees/contact-info')
  }


  updateContactInfo(id:any, formData:any){
    return this.httpClient.patch<Contact[]>(`http://localhost:3000/employees/updatecontact/${id}`,formData);

  }
//about-us
  getAboutUsInfoById(id:any) {
    return this.httpClient.get(`http://localhost:3000/employees/about-us/${id}`)
  }


  updateAboutUs(id:any, formData:any){
    return this.httpClient.patch<Contact[]>(`http://localhost:3000/employees/updateabout-us/${id}`,formData);

  }
  update_review(id:any,formData:any){
    return this.httpClient.patch<Review[]>(`http://localhost:3000/employees/updatereview/${id}`,formData);
  }

  getAboutUs() {
    return this.httpClient.get<AboutUs[]>('http://localhost:3000/about-us');
  }

}
