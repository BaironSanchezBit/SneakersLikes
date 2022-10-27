import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Coment } from "../models/coments";

@Injectable({
  providedIn: 'root'
})
export class ComentService {

  url = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  getComents():Observable<any>{
    return this.http.get(`${this.url}/comentarios`)
  }

  getComentsAd():Observable<any>{
    return this.http.get(`${this.url}/comentarios-admin`)
  }
  
  deleteComentAd(id:string): Observable<any>{
    return this.http.delete(`${this.url}/borrar-comentarios-admin/${id}`)
  } 

  crearComent(coment: Coment): Observable<any>{
    return this.http.post(`${this.url}/crear-comentario`, coment);
  }

  getComent(id:string):Observable<any>{
    return this.http.get(`${this.url}/comentarios-admin/${id}`)
  }
}
