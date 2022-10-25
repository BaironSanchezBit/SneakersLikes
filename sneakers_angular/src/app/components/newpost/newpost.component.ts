import { Component, OnInit } from '@angular/core';
import { Post } from "../../models/post";
import Swal from "sweetalert2";
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  listarPost: Post[] = []


  constructor(private _postService: PostService) {}

  ngOnInit(): void {
    this.obtenerPosts()
  }

  obtenerPosts() {
    this._postService.getPosts().subscribe((data) => {
      console.log(data)
      this.listarPost = data
    }, (error) => {
      console.log(error)
    })
  }

  eliminarPost(id:any) {
    Swal.fire({
      title: 'Esta seguro de eliminar la publicación',
      text: 'Si confirmas, la publicaciones se eliminará por siempre',
      icon: 'warning',
      iconColor: '#ff8c00',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._postService.deletePost(id).subscribe((data) => {
          Swal.fire(
            'Borrado',
            'Tu publicación se eliminó',
            'success'
          )
        }, (error) => {
          console.log(error)
        })
      }
    })
  }

}
