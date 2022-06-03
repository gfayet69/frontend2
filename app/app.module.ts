import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HttpClientModule } from '@angular/common/http';
import { ListCoursComponent } from './list-cours/list-cours.component';
import { EnseigneUserComponent } from './enseigne-user/enseigne-user.component';
import { EnseigneCoursComponent } from './enseigne-cours/enseigne-cours.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { EditEnseigneComponent } from './edit-enseigne/edit-enseigne.component';
import { OneUserComponent } from './one-user/one-user.component';
import { GetCoursComponent } from './get-cours/get-cours.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    AuthentificationComponent,
    ListCoursComponent,
    EnseigneUserComponent,
    EnseigneCoursComponent,
    NavComponent,
    HomeComponent,
    EditEnseigneComponent,
    OneUserComponent,
    GetCoursComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
