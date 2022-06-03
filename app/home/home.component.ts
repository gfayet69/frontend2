import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message='Vous devez vous connecter';
  user:any;
  UC:any
  sum:any

  constructor(
    private userService:UserService,
    private router:Router,
    private httpClient : HttpClient

  ) { }

  getColor(){
    if (this.sum<this.user.nbHmini) {
      return 'red'
    }
    else {
      return 'green'
    }
  }

  ngOnInit(): void {
    if(!localStorage.getItem('userConnected'))
    {
      this.router.navigate(['/login']);
    }
    else
    {
      const userJson = localStorage.getItem('userConnected');
      console.log(userJson)
      if(userJson)
      {
        this.user = JSON.parse(userJson);
        console.log('nom:',this.user.nom)
        console.log(this.user._id)
        this.httpClient.get('http://localhost:3000/api/enseigne/uc/'+this.user._id).subscribe((data:any)=>{
          console.log(data);
          this.UC = data;
          if(this.user._id != 'ATER')
          {
            this.sum = this.UC.CMsum*1.5+this.UC.TPsum+this.UC.TDsum
            console.log('sum:',this.sum)
          }
          else{
            this.sum = this.UC.CMsum*1.5+this.UC.TPsum*0.75+this.UC.TDsum
            console.log('sum:',this.sum)
          }
        console.log('UC:',this.UC)
      })
    }
      else{
        this.router.navigate(['/login']);
      }
      this.message='bonjour';
    }
}
}
