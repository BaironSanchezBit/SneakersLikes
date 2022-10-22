import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  usuarioForm: FormGroup;

  listUsuario: Usuario[] = [];

  constructor(private fb: FormBuilder, private router: Router, private _usuarioService: UsuarioService) {
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

  abrirAlerta(){
    Swal.fire({
      icon: 'info',
      title: 'Discúlpanos',
      text: '¡Por ahora no tenemos redes Sociales!',
      confirmButtonColor: "#E9560D"
    })
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

      this._usuarioService.postUsuario(USUARIO).subscribe(data => {
        this.router.navigate(['/']);
        Swal.fire({
          title: 'Exito',
          text: 'El registro se realizó correctamente',
          icon: 'success',
          confirmButtonText: 'Vale'
        })
      }, error =>{
        console.log(error);
      })
    }
  }
}


