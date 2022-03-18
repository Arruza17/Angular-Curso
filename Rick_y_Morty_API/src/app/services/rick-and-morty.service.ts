import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  baseURL: string = 'https://rickandmortyapi.com/api/';

  constructor(private httpClient: HttpClient) { }

  getByPage(page: number): Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseURL+"/character?page="+page);

  }


}
