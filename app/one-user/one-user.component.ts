import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.css']
})
export class OneUserComponent implements OnInit {
  user:any;
  UC:any
  sum:any
  addUser:any
  id:any

  constructor(
    private userService:UserService,
    private router:Router,
    private httpClient : HttpClient,
    private url:ActivatedRoute
  ) { }



  ngOnInit(): void {

    if(!localStorage.getItem('userConnected'))
    {
      this.router.navigate(['/login']);
    }
    else
    {
      const userJson = localStorage.getItem('userConnected');

      if(userJson)
      {
        this.user = JSON.parse(userJson);
        this.id = this.url.snapshot.params['id'];
        this.addUser = this.userService.singleUser(this.id).subscribe(data=>{
          console.log('data:',data)
          this.addUser = data;
          console.log('adduser:',data);
        this.UC = this.httpClient.get('http://localhost:3000/api/enseigne/uc/'+this.addUser._id).subscribe((data:any)=>{
          console.log('UC obj:',data);
          this.UC = data;

          if(this.addUser._id != 'ATER')
          {
            this.sum = this.UC.CMsum*1.5+this.UC.TPsum+this.UC.TDsum
            console.log('sum1:',this.sum, this.UC.CMsum, this.UC.TPsum, this.UC.TDsum)
          }
          else{
            this.sum = this.UC.CMsum*1.5+this.UC.TPsum*0.75+this.UC.TDsum
            console.log('sum:',this.sum)
          }
        })
        console.log('UC:',this.UC)
      })
    }
      else{
        this.router.navigate(['/login']);
      }
    }
  }
  getColor(){
    if (this.sum<this.addUser.nbHmini) {
      return 'red'
    }
    else {
      return 'green'
    }
  }

}
