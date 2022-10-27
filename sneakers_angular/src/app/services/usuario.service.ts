import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //url = 'http://localhost:4000/api';
  url = 'https://express-snakers-likes.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  postUsuario(usuario: Usuario): Observable<any>{
    return this.http.post(this.url, usuario);
  }

  getUsuarios(): Observable<any>{
    return this.http.get(this.url)
  }
}
