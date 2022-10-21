import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Post } from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'http://localhost:4000/api/post';

  constructor(private http: HttpClient) { }

  postUsuario(post: Post): Observable<any>{
    return this.http.post(this.url, post);
  }
}
