import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ShelterService } from './shelter.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { PetComponent } from './pet/pet.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    PetComponent,
    ShowComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ShelterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
