import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from "../../models/post";
import Swal from "sweetalert2";
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-formulario-post',
  templateUrl: './formulario-post.component.html',
  styleUrls: ['./formulario-post.component.css']
})
export class FormularioPostComponent implements OnInit {
  
  postForm: FormGroup;
  titulo_formulario = "Crear Post"
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private _postService: PostService, private idRoute: ActivatedRoute) {
    this.postForm = this.fb.group({
      titleArticle: ['', [Validators.required]],
      post: ['', [Validators.required]],
      img: ['', [Validators.required]],
    })
    this.id = this.idRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.accionEditar()
  }

  dataPost() {
    console.log(this.postForm);

    const POST: Post = {
      titleArticle: this.postForm.get('titleArticle')?.value,
      post: this.postForm.get('post')?.value,
      img: this.postForm.get('img')?.value
    }

    console.log(POST)
    this._postService.crearPost(POST).subscribe(data => {
      this.router.navigate(['/newpost']);
      Swal.fire({
        title: 'Exito!',
        text: 'La publicacion se realizó correctamente',
        icon: 'success',
        confirmButtonText: 'Vale'
      })
    }, error => {
      console.log(error)
    })

  }

  accionEditar(){
    if (this.id != null) {
      this.titulo_formulario = 'Actualizar Post'
      this._postService.getPost(this.id).subscribe((data)=>{
        this.postForm.setValue({
          titleArticle: data.titleArticle,
          post: data.post,
          img: data.img
        })
      }, (error)=>{
        console.log(error)
      })
    }
  }
}
