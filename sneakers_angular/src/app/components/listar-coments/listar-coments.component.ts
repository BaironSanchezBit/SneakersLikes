import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { ComentService } from 'src/app/services/coment.service';
import { Coment } from 'src/app/models/coments';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-coments',
  templateUrl: './listar-coments.component.html',
  styleUrls: ['./listar-coments.component.css']
})
export class ListarComentsComponent implements OnInit {

  listarComent: Coment[] = []

  constructor(private _comentService: ComentService) { }

  ngOnInit(): void {
    this.obtenerComents()
  }

  obtenerComents() {
    this._comentService.getComents().subscribe((data) => {
      console.log(data)
      this.listarComent = data
    }, (error) => {
      console.log(error)
    })
  }

}
