import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  nuevoPost: Post;

  constructor(
    private blogService: BlogService,
    private router: Router
  ) {
    this.nuevoPost = {
      titulo: '', texto: '', autor: '', imagen: '', fecha: '', categoria: '',
     }
    }

  crearPost() {
    this.blogService.create(this.nuevoPost);
    this.nuevoPost = {
      titulo: '', texto: '', autor: '', imagen: '', fecha: '', categoria: '',
    }
    this.router.navigate(['/posts']);
  }
}
  



