import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnseigneService } from '../services/enseigne.service';


@Component({
  selector: 'app-get-cours',
  templateUrl: './get-cours.component.html',
  styleUrls: ['./get-cours.component.css']
})
export class GetCoursComponent implements OnInit {

  addCours:any;
  user:any
  cours:any;
  coursAdded:any;
  currentMessage:any
  coursJSON:any

  constructor(private fb : FormBuilder,
    private routes : Router,
    private enseigneService : EnseigneService)  
    {
      this.addCours = this.fb.group({
        user: ['',Validators.required],
        cours : ['', Validators.required],
        grCM : ['', Validators.required],
        grTP : ['', Validators.required],
        grTD : ['', Validators.required]
     })
    }

  ngOnInit(): void {
    if(!localStorage.getItem('userConnected'))
    {
      this.routes.navigate(['/login']);
    }
    else
    {

      const userJson = localStorage.getItem('userConnected');
      const coursJSON = localStorage.getItem('coursAdded');
      const cours = JSON.parse(this.coursJSON);
      
      console.log(userJson)
      if(userJson)
      {
        this.user = JSON.parse(userJson);
        console.log('userID:',this.user._id)
      }
      else
      {
        this.routes.navigate(['/login']);
      }
  }
}
onSubmit(){ 
  this.addCours.value.user = this.user._id; 
  this.addCours.value.cours = this.cours._id;
  console.log('coursvalue:',this.addCours.value);
  localStorage.removeItem('coursAdded');
  this.enseigneService.addEnseigne(this.addCours.value).subscribe(
    (data:any) => {
      console.log(data);
      this.routes.navigate(['']);
    }
  )
}
}
