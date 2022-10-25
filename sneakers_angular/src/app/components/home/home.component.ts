import { Component, OnInit } from '@angular/core';
import { Post } from "../../models/post";
import { PostService } from 'src/app/services/post.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listarPost: Post[] = [];

  constructor(private _postService: PostService) {
  }

  ngOnInit(): void {
    this.obtenerPosts()
  }


  abrirAlerta() {
    Swal.fire({
      icon: 'info',
      title: 'Discúlpanos',
      text: '¡Por ahora no tenemos redes Sociales!',
      confirmButtonColor: "#E9560D"
    })
  }

  obtenerPosts() {
    this._postService.getPosts().subscribe((data) => {
      console.log(data)
      this.listarPost = data
    }, (error) => {
      console.log(error)
    })
  }

  obtenerPostEspecifico(id: string) {
    this._postService.getPostEspecifico(id).subscribe((data) => {
      console.log(data)
      this.listarPost = data
    }, (error) => {
      console.log(error)
    })
  }
}
