import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnseigneService } from '../services/enseigne.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-enseigne-cours',
  templateUrl: './enseigne-cours.component.html',
  styleUrls: ['./enseigne-cours.component.css']
})
export class EnseigneCoursComponent implements OnInit {

  enseignes:any;
  users:any;
  userConnected:any;
  id:any;
  constructor(private enseigneService:EnseigneService,
    private userService:UserService,
    private routes:Router,
    private url:ActivatedRoute 
    
    ) { }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    this.loadEnseigneByCours(this.id);
    const userJson = localStorage.getItem('userConnected');
    if(userJson)
    {
    this.userConnected = JSON.parse(userJson);
    }
  }

  loadEnseigneByCours(id:any){
    this.enseigneService.listEnseigneByCours(id).subscribe((data:any)=>{
      console.log(data);
      this.users = data;
    })
  }

  delEnseigne(datas:any){
    this.enseigneService.deleteEnseigne(datas._id).subscribe(
      data => {
        console.log(data);
        this.enseignes = this.enseignes.filter((u:any)=> u !== datas)
        
      }
    )
  }

}


