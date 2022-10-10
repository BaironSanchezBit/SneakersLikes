import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:4000/api/usuario';

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<any>{
    return this.http.get(this.url);
  }
}
