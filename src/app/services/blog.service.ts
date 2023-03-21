import { Injectable } from '@angular/core';
import { Posts } from '../db/post.db';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private arrPosts: Post[];

  constructor() {
    this.arrPosts = [];
   }

  //Recupera todos los posts
  getAll(): Post[] {
    return Posts;
  }

  getByCategoria(categoria: string) {
    return this.arrPosts.filter(post => post.categoria > categoria);
  }

  //Crear nuevo post
  create(pPost: Post) {
    this.arrPosts.push(pPost)
  }


}

