import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})



export class AuthentificationComponent implements OnInit {

  form!: FormGroup;
  user:any;
  identifiant:any;
  password:any;
  params:any
  id:any;
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
    })}


  constructor(private formBuilder:FormBuilder,
    private httpClient:HttpClient,
    private userService:UserService,
    private router : Router) { }

  ngOnInit(): void {
    
    {
      this.form = this.formBuilder.group({
        identifiant: ['',Validators.required],
        password : ['', Validators.required],
     })
    }
;
  }
onSubmit():void {
  this.identifiant = this.form.value.identifiant;
  this.password = this.form.value.password;
  this.params = this.identifiant.concat('/', this.password);
  console.log(this.identifiant);
  console.log(this.params)
  this.user = this.userService.singleUserByIdentifiantAndPassword(this.params).subscribe(
    (data:any)=>{
      console.log('data',data);
      localStorage.setItem('userConnected',JSON.stringify(data));
      this.router.navigate(['']);
    }
  )
}
}

  /*
  this.user= this.userService.singleUserByIdentifiant(this.identifiant).subscribe(
    (data:any) => {
      console.log('data',data);
      localStorage.setItem('userConnected',JSON.stringify(data));
      this.router.navigate(['']);
      }
  )

}}
*/