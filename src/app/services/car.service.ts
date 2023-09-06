import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient : HttpClient) { }
  
  // gelAll(): Observable<IPost[]> {
  //   return this.httpClient.get<IPost[]>(urls.posts.base)
  // }
  //
  // getById(id: number): Observable<IPost>{
  //   return this.httpClient.get<IPost>(urls.posts.buId(id))
  // }
}
