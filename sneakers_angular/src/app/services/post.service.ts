import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Post } from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'http://localhost:4000/api/newpost';

  constructor(private http: HttpClient) { }

  getPosts():Observable<any>{
    return this.http.get(`${this.url}/publication`)
  }
  
  deletePost(id:string): Observable<any>{
    return this.http.delete(`${this.url}/borrar-post/${id}`)
  } 

  crearPost(post: Post): Observable<any>{
    return this.http.post(`${this.url}/crear-post`, post);
  }

  getPost(id:string):Observable<any>{
    return this.http.get(`${this.url}/publication/${id}`)
  }

  getPostEspecifico(id:string): Observable<any>{
    return this.http.get(`${this.url}/`)
  }
}
