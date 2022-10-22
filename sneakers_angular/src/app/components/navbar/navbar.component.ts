import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


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
  
}


