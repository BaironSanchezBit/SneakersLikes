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

  refresh(): void { window.location.reload(); }

  eliminarComent(id: any) {
    Swal.fire({
      title: 'Esta seguro de eliminar el comentario',
      text: 'Si confirmas el comenntario se eliminará por siempre',
      icon: 'warning',
      iconColor: '#ff8c00',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._comentService.deleteComent(id).subscribe((data) => {
          Swal.fire(
            'Eliminado',
            'El comentario se eliminó correctamente',
            'success'
          )
          setTimeout(() =>{
            this.refresh();
          }, 1000)
        }, (error) => {
          console.log(error)
        })
      }
    })
  }
}
