import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from './model/post.model';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'a'
  arrayPost: any[];
  postFound: Post;
  formulario: FormGroup;

  constructor(private postService: PostsService) {
    this.arrayPost = [];
    this.postFound = new Post(0, 0, '', '');
    this.formulario = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      userId: new FormControl('')
    })
  }

  ngOnInit() {
    this.postService.getAll()
      .subscribe((post) => this.arrayPost = post)

  }

  onClick(postId: number) {
    try {
      this.postService.getById(postId)
        .subscribe((post) => this.postFound = post)
    } catch (error: any) {
      console.log(error);
    }

  }
  onPeticionPost() {
    try {
      const created = this.postService.create(new Post(
        1, 0, 'Nuevo título', 'Este es el cuerpo del post'
      )).subscribe(response => console.log(response));
    } catch (error) {
      console.log(error)
    }

  }
  onSubmit() {
    try {
      this.postService.create(this.formulario.value)
        .subscribe(response => console.log(response));
    } catch (error) {
      console.log(error);
    }

  }
  onClickUpdate() {
    this.postService.update(new Post(
      3, 5, 'Edit', 'Body editado'
    )).subscribe(responde => console.log(responde))
  }
  onClickDelete(){
    this.postService.delete(1)
    .subscribe(response => console.log(response))
  }
}
