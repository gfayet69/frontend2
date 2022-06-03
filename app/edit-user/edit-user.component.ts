import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  addUser:any
  user:any;
  id:any

  constructor(private fb : FormBuilder,
    private routes : Router,
    private userService : UserService,
    private url:ActivatedRoute) 
    {
      this.addUser = this.fb.group({
        identifiant: ['',Validators.required],
        nom : ['', Validators.required],
        prenom : ['', Validators.required],
        password : ['', Validators.required],
        statut : ['', Validators.required],
        nbHmini : ['', Validators.required],
     })
    }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    this.userService.singleUser(this.id).subscribe(data=>{
      this.addUser.patchValue(data);
    })
    const userJson = localStorage.getItem('userConnected');
    if(userJson)
    {
    this.user = JSON.parse(userJson);
    }
    else
    {
      this.routes.navigate(['/login']);
    }
  }
  
  onSubmit(){
    console.log(this.addUser.value);
    this.id = this.url.snapshot.params['id'];
    this.userService.updateUser(this.id, this.addUser.value).subscribe(
      (data:any) => {
        console.log(data);
        this.routes.navigate(['/allUser']);
      }
    )
  }
}
