import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent {

  posts!: Post[];
  categoria!: string[];
  

  constructor(private blogService: BlogService ) {
    this.posts = [];
    this.categoria = [];
  }

  ngOnInit() {
    this.posts = this.blogService.getAll()
  }

  onChange($event: any) {
    if ($event.target.value === 'todos') {
      this.posts = this.blogService.getAll();
    } else {
        this.posts = this.blogService.getByCategoria($event.target.value);
    }
    }
}
