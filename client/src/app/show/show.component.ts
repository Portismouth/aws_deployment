import { Component, OnInit } from '@angular/core';
import { ShelterService } from '../shelter.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pet } from '../pet';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(
    private _shelterService: ShelterService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { };

  pet = new Pet();
  showLike = true;

  ngOnInit() {
    let id = this._route.params["_value"].id;
    this.getIndyPetFromService(id);
  }

  adoptPet(event, petId){
    let observable = this._shelterService.adoptPet(petId);
    observable.subscribe(serverResponse => {
      console.log(serverResponse);
      this.goHome();
    });
  }

  likePet(event, petId){
    let observable = this._shelterService.likePet(petId);
    observable.subscribe(pet => {
      console.log(pet);
      this.getIndyPetFromService(pet["_id"]);
      this.showLike = false;
    })
  }

  getIndyPetFromService(petId){
    let observable = this._shelterService.getPetById(petId);
    observable.subscribe(pet => {
      this.pet.id = pet["_id"];
      this.pet.name = pet["name"];
      this.pet.type = pet["petType"];
      this.pet.desc = pet["desc"];
      this.pet.likes = pet["likes"];
      this.pet.skills = pet["skills"];
    })
    console.log(this.pet);
  }

  goHome() {
    this._router.navigate(['/home']);
  }

}
