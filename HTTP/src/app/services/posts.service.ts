import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  }
  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.baseUrl);

  }
  getById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.baseUrl + "/" + id);
  
  }

  create(post: Post): Observable<Post>{
    const title = post.title;
    const body = post.body;
    const userId = post.userId;
    const bodyRequest = { title,body,userId};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    }
    return this.httpClient.post<Post>(this.baseUrl,bodyRequest,httpOptions);

  }
  update(post: Post):Observable<Post>{
    return this.httpClient.put<Post>(this.baseUrl+"/"+post.id,post);
  }
  delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.baseUrl+"/"+id);
  }
}
