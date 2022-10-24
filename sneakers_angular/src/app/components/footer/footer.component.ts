import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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

