import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.usuarioForm = this.fb.group({
      fullName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      vereficarClave: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  crearUsuario() {

    if (this.usuarioForm.get('password')?.value != this.usuarioForm.get('vereficarClave')?.value) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden',
      })

    } else {

      const USUARIO: Usuario = {
        fullName: this.usuarioForm.get('fullName')?.value,
        username: this.usuarioForm.get('username')?.value,
        password: this.usuarioForm.get('password')?.value,
        email: this.usuarioForm.get('email')?.value
      }

      Swal.fire({
        title: 'Exito',
        text: 'El registro se realizó correctamente',
        icon: 'success',
        confirmButtonText: 'Vale'
      })
      this.router.navigate(['/']);
    }
  }

}
