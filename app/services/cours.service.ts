import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http:HttpClient) { }

  listCours(){
    return this.http.get('http://localhost:3000/api/cours/');
  }
  singleCours(id:any){
    return this.http.get('http://localhost:3000/api/cours/id/'+id);
  }
}
