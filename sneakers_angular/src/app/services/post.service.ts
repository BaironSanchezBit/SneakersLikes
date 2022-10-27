import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Post } from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  //url = 'http://localhost:4000/api';
  url = 'https://express-snakers-likes.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getPosts():Observable<any>{
    return this.http.get(`${this.url}/publicaciones`)
  }
  
  deletePost(id:string): Observable<any>{
    return this.http.delete(`${this.url}/borrar-publicacion/${id}`);
  } 

  crearPost(post: Post): Observable<any>{
    return this.http.post(`${this.url}/crear-publicacion`, post);
  }

  getPost(id:string):Observable<any>{
    return this.http.get(`${this.url}/publicacion/${id}`);
  }

  putPost(id: string, post: Post): Observable<any>{
    return this.http.put(`${this.url}/actualizar-publicacion/${id}`, post);
  }
}
