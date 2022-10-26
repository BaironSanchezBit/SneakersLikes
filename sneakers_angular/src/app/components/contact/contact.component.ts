import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Coment } from "../../models/coments";
import Swal from "sweetalert2";
import { ComentService } from 'src/app/services/coment.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ComentForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private _comentService: ComentService, private idRoute: ActivatedRoute) {
    this.ComentForm = this.fb.group({
      name: ['', [Validators.required]],
      coment: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  refresh(): void { window.location.reload(); }

  dataComent() {
    console.log(this.ComentForm);

    const COMENT: Coment = {
      name: this.ComentForm.get('name')?.value,
      coment: this.ComentForm.get('coment')?.value,
    }
    this._comentService.crearComent(COMENT).subscribe(data => {
      Swal.fire({
        title: 'Excelente!',
        text: '!Muchas gracias por comentar!',
        icon: 'success',
        confirmButtonText: 'Vale',
      }).then((result) => {
        if (result.isConfirmed) {
          this.refresh();
        }
      })
    }, error => {
      console.log(error)
    })
  }
  abrirAlerta() {
    Swal.fire({
      icon: 'info',
      title: 'Discúlpanos',
      text: '¡Por ahora no tenemos redes Sociales!',
      confirmButtonColor: "#E9560D"
    })
  }

  abrirAlertaSuscripcion() {
    Swal.fire({
      icon: 'error',
      title: 'Trabajamos Fuerte',
      text: '¡Por ahora no tenemos boletin de noticias!',
      //footer: '<a href="">Puedes leer nuestras publicaciones</a>',
      footer: '<a routerLink="/post">Puedes leer nuestras publicaciones</a>',
      confirmButtonColor: "#E9560D"
    })
  }
}

