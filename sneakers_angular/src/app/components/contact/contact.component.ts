import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

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

  abrirAlertaSuscripcion(){
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

