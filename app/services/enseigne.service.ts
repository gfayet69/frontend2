import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnseigneService {

  constructor(private http:HttpClient) { }

  
  listEnseigneByUser(id:any){
    return this.http.get('http://localhost:3000/api/enseigne/user/'+id);
  }
  listEnseigneByCours(id:any){
    return this.http.get('http://localhost:3000/api/enseigne/cours/'+id);
  }
  deleteEnseigne(id:any){
    return this.http.delete('http://localhost:3000/api/enseigne/'+id);
  }
  updateEnseigne(id:any,enseigne:any){
    return this.http.put('http://localhost:3000/api/enseigne/'+id,enseigne);
  }
  listEnseigneById(id:any){
    return this.http.get('http://localhost:3000/api/enseigne/id/'+id);
  }
  addEnseigne(enseigne:any){
    return this.http.post('http://localhost:3000/api/enseigne/register',enseigne);
  }
}
