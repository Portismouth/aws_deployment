import { Component, OnInit } from '@angular/core';
import { ShelterService } from '../shelter.service';
import { ActivatedRoute, Params, Router, Route } from '@angular/router';
import { Pet } from '../pet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _shelterService: ShelterService,
    private _router: Router
  ) { }

  pets = [];

  ngOnInit() {
    this.getPetsFromService();
  }

  getPetsFromService(){
    let observable = this._shelterService.getAllPets();
    observable.subscribe(pets => {
      for (let pet in pets) {
        this.pets.push(pets[pet]);
      }
      console.log(pets)
    });
  }

}
