import { Component, OnInit } from '@angular/core';
import { ShelterService } from '../shelter.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pet } from '../pet';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private _shelterService: ShelterService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { };

  pet = new Pet();
  editPet = {
    id: "",
    name: "",
    type: "",
    desc: "",
    skill1: "",
    skill2: "",
    skill3: ""
  };
  errors = [];
  displayErr: Boolean;

  ngOnInit() {
    let id = this._route.params["_value"].id;
    this.getIndyPetFromService(id)
  }

  submitEditPet() {
    console.log(this.pet)
    let observable = this._shelterService.updatePet(this.editPet);
    observable.subscribe(res => {
      if (res["message"] != "success") {
        console.log("error portion")
        for (let error in res) {
          this.errors.push(res[error].message);
          this.displayErr = true;
        };
      } else {
        console.log("success portion")
        this.goHome();
      }
    });
  }

  getIndyPetFromService(petId) {
    let observable = this._shelterService.getPetById(petId);
    observable.subscribe(pet => {
      this.editPet.id = pet["_id"];
      this.editPet.name = pet["name"];
      this.editPet.type = pet["petType"];
      this.editPet.desc = pet["desc"];
      for (let idx = 0; idx < pet["skills"].length; idx++) {
        if (this.editPet.skill1 == "") {
          this.editPet.skill1 = pet["skills"][idx];
        } else if (this.editPet.skill2 == "") {
          this.editPet.skill2 = pet["skills"][idx];
        } else if (this.editPet.skill3 == "") {
          this.editPet.skill3 = pet["skills"][idx];
        }
      }
      console.log(this.editPet);
    })
  }

  goHome() {
    this._router.navigate(['/home']);
  }
}
