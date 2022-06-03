import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users:any;
  UC:any
  userConnected:any

  constructor(private userService:UserService,
    private routes:Router,
    private httpClient : HttpClient
  
    
    ) { }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(){
    this.userService.listUser().subscribe((data:any)=>{
      console.log(data);
      this.users = data;
    })

    const userJson = localStorage.getItem('userConnected');
    if(userJson)
    {
    this.userConnected = JSON.parse(userJson);
    }
    else
    {
      this.routes.navigate(['/login']);
    }
    this.httpClient.get('http://localhost:3000/api/enseigne/uc/'+this.users._id).subscribe((data:any)=>{
      console.log(data);
      this.UC = data;
})
  }


  delUser(datas:any){
    this.userService.deleteUser(datas._id).subscribe(
      data => {
        console.log(data);
        this.users = this.users.filter((u:any)=> u !== datas)
        
      }
    )
  }
}
