import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  listUsuario: Usuario[] = [];

  constructor(private fb: FormBuilder, private router: Router, private _usuarioService: UsuarioService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }
  
  

  ngOnInit(): void {
  }

  login(){
    if (this.loginForm.get('email')?.value == this) {
      
    }
  }

  obtenerUsuarios() {
    this._usuarioService.getUsuarios().subscribe((data) => {
      console.log(data)
      this.listUsuario = data
    }, (error) => {
      console.log(error)
    })
  }

}
