import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnseigneService } from '../services/enseigne.service';

@Component({
  selector: 'app-enseigne-user',
  templateUrl: './enseigne-user.component.html',
  styleUrls: ['./enseigne-user.component.css']
})
export class EnseigneUserComponent implements OnInit {
  enseignes:any;
  user:any;
  id:any;
  constructor(private enseigneService:EnseigneService,
    private routes:Router,
    private url:ActivatedRoute 
    
    ) { }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    this.loadEnseigneByUser(this.id);
    const userJson = localStorage.getItem('userConnected');
    if(userJson)
    {
    this.user = JSON.parse(userJson);
    }
  }

  loadEnseigneByUser(id:any){
    this.enseigneService.listEnseigneByUser(id).subscribe((data:any)=>{
      console.log(data);
      this.enseignes = data;
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
