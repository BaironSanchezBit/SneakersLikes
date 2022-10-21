import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from "../../models/post";
import Swal from "sweetalert2";


@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.postForm = this.fb.group({
      tittleArticle: ['', [Validators.required]],
      post: ['', [Validators.required]],
      img: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  crearPost() {
    console.log(this.postForm);
    const Swal = require('sweetalert2');

    const POST: Post = {
      tittleArticle: this.postForm.get('tittleArticle')?.value,
      post: this.postForm.get('post')?.value,
      img: this.postForm.get('img')?.value
    }

    console.log(POST)
    this.router.navigate(['/newpost']);
    Swal.fire({
      title: 'Exito!',
      text: 'La publicacion se realizó correctamente',
      icon: 'success',
      confirmButtonText: 'Vale'
    })
  }

}
