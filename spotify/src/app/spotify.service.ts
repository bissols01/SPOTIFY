import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const headers = new HttpHeaders({Authorization: environment.oauthToken});
//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }


  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDTY6BWpaioR5bk-ysWZmuwY2MEL1hVZzndmQFcPQnADakVlvyaR4-ld59Euuf8sGYWbvgASzsu4XvI8m30brTuVjQkWpp-m02qbRPe-zr63Y9YCA7H5veOoSqbA8eeAfjkR0daY6b123wQ5VSGtKkIiz5TtUbqWj-R1NMvZ3soYBaybM3Q3UyCK_AaLXDtd6hVPZOrWo-Lv0UiIc4clxK1XWqoQVZIA44mlyqjQUn1tXBRHgkKLdk927p3s_8bUzCCfS1I7yZ8gA'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDTY6BWpaioR5bk-ysWZmuwY2MEL1hVZzndmQFcPQnADakVlvyaR4-ld59Euuf8sGYWbvgASzsu4XvI8m30brTuVjQkWpp-m02qbRPe-zr63Y9YCA7H5veOoSqbA8eeAfjkR0daY6b123wQ5VSGtKkIiz5TtUbqWj-R1NMvZ3soYBaybM3Q3UyCK_AaLXDtd6hVPZOrWo-Lv0UiIc4clxK1XWqoQVZIA44mlyqjQUn1tXBRHgkKLdk927p3s_8bUzCCfS1I7yZ8gA'
    });

    return this.http.get(url, { headers });
  }
}
