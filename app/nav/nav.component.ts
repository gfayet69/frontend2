import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user:any;
  constructor(private router:Router,
    ) { }

  ngOnInit(): void {
    const userJson = localStorage.getItem('userConnected');
    if(userJson)
    {
    this.user = JSON.parse(userJson);
    }
    console.log(this.user._id)
  }

  logout():void {
    localStorage.removeItem('userConnected');
    this.router.navigate(['/login']);
  }

}
