import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesEuropaService {

  baseURL: string = 'https://restcountries.com/v2/regionalbloc/eu';

  constructor(private httpClient: HttpClient) { }

  getAllCountries(): Observable<any[]> {
    const paises = this.httpClient.get<any[]>(this.baseURL)
    return paises;

  }


}
