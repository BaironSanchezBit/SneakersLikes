import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from "../../models/post";
import { Router } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id: any;
  listarPost: Post[] = []

dataPost: any
  constructor(private _postService: PostService, private idRoute: ActivatedRoute, private router: Router) {
    this.id = this.idRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.obtenerPostsFuncion();
    this.obtenerPosts();
  }

  obtenerPostsFuncion(){
    this._postService.getPost(this.id).subscribe((data)=>{
      this.dataPost = data
    }, (error)=>{
      console.log(error)
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

  refresh(): void { window.location.reload(); }

  obtenerPostEspecifico(id: string) {
    this._postService.getPost(id).subscribe((data) => {
      console.log(data)
      this.listarPost = data
    }, (error) => {
      console.log(error)
    })
  }
}
