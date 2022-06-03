import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursService } from '../services/cours.service';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { EnseigneService } from '../services/enseigne.service';

@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.component.html',
  styleUrls: ['./list-cours.component.css']
})
export class ListCoursComponent implements OnInit {

  ues :any;
  user:any;
  cours:any;
  addCours:any;
  coursJSON:any;

  

  
  constructor(private coursService:CoursService,
    private routes:Router,
    private enseigneService:EnseigneService,
    private fb : FormBuilder)
    
    {
      this.addCours = this.fb.group({
        user: ['',Validators.required],
        cours : ['', Validators.required],
        grCM : [0, Validators.required],
        grTP : [0, Validators.required],
        grTD : [0, Validators.required]
     }) }

  ngOnInit(): void {
    this.loadCours();
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

  loadCours(){
    this.coursService.listCours().subscribe((data:any)=>{
      console.log('data,',data);
      this.ues = data;
    })
  }


  onSubmit(id:any){
    console.log('id:',id);
    this.coursService.singleCours(id).subscribe((data:any)=>{
      console.log('data,',data);
    localStorage.setItem('coursAdded',JSON.stringify(data));
    

    console.log('user1:',this.user);


    this.coursJSON = localStorage.getItem('coursAdded');
    if(this.coursJSON)
    this.cours = JSON.parse(this.coursJSON);
    console.log('thiscours:',this.cours)
    this.addCours.value.user = this.user._id; 
    this.addCours.value.cours = this.cours._id;
    console.log('coursvalue:',this.addCours.value);
    localStorage.removeItem('coursAdded');
    this.enseigneService.addEnseigne(this.addCours.value).subscribe(
      (data:any) => {
        console.log(data);
        this.routes.navigate(['/edit-user/'+this.user._id]);
       } )}
    
  )
      }
  }