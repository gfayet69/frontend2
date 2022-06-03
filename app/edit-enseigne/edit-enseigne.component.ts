import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnseigneService } from '../services/enseigne.service';

@Component({
  selector: 'app-edit-enseigne',
  templateUrl: './edit-enseigne.component.html',
  styleUrls: ['./edit-enseigne.component.css']
})
export class EditEnseigneComponent implements OnInit {

  editEnseigne:any
  id:any

  constructor(private fb : FormBuilder,
    private routes : Router,
    private enseigneService : EnseigneService,
    private url:ActivatedRoute) 
    {
      this.editEnseigne = this.fb.group({
        grCM : ['', Validators.required],
        grTD : ['', Validators.required],
        grTP : ['', Validators.required]
     })
    }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    this.enseigneService.listEnseigneById(this.id).subscribe((data:any)=>{
      this.editEnseigne.patchValue(data);
    })
  }
  
  onSubmit(){
    console.log(this.editEnseigne.value);
    this.id = this.url.snapshot.params['id'];
    this.enseigneService.updateEnseigne(this.id, this.editEnseigne.value).subscribe(
      (data:any) => {
        console.log(data);
      }
    )
  }
}