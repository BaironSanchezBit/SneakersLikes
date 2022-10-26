import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from "../../models/post";
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-default',
  templateUrl: './post-default.component.html',
  styleUrls: ['./post-default.component.css']
})
export class PostDefaultComponent implements OnInit {

  listarPost: Post[] = []

dataPost: any
  constructor(private _postService: PostService, private idRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.obtenerPosts();
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
