import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addUser(user:any){
    return this.http.post('http://localhost:3000/api/user/register',user);
  }
  listUser(){
    return this.http.get('http://localhost:3000/api/user/');
  }
  deleteUser(id:any){
    return this.http.delete('http://localhost:3000/api/user/'+id);
  }
  singleUser(id:any)
  {
    return this.http.get('http://localhost:3000/api/user/id/'+id);
  }
  updateUser(id:any,user:any){
    return this.http.put('http://localhost:3000/api/user/'+id,user);
  }
  checkCookie()
  {
    return this.http.get('http://localhost:3000/api/user/authentification');
  }
  login(id:any,password:any)
  {
    return this.http.post('http://localhost:3000/api/user/login',+id,password);
  }
  getNomPrenom(nom:any,prenom:any)
  {
    return this.http.get('http://localhost:3000/api/user/name/'+nom+prenom);
  }
  singleUserByIdentifiant(identifiant:any)
  {
    return this.http.get('http://localhost:3000/api/user/identifiant/'+identifiant);
  }
  singleUserByIdentifiantAndPassword(identifiant:any)
  {
    return this.http.get('http://localhost:3000/api/user/name/'+identifiant);
  }
  getUC(id:any)
  {
    return this.http.get('http://localhost:3000/api/enseigne/uc/'+id);
  }



}
