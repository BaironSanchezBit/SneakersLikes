import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuarioForm: FormGroup;

  listUsuario: Usuario[] = [];

  constructor(private fb: FormBuilder, private router: Router, private _usuarioService: UsuarioService) {
    this.usuarioForm = this.fb.group({
      name: ['', [Validators.required]],
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
        name: this.usuarioForm.get('name')?.value,
        email: this.usuarioForm.get('email')?.value,
        password: this.usuarioForm.get('password')?.value
      }

      this._usuarioService.postUsuario(USUARIO).subscribe(data => {
        this.router.navigate(['/login']);
        Swal.fire({
          title: 'Exito',
          text: 'El registro se realizó correctamente',
          icon: 'success',
          confirmButtonText: 'Vale'
        })
      }, error =>{
        console.log(error);
      })
      console.log(USUARIO)
    }
  }
}
