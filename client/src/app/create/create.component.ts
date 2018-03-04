import { Component, OnInit } from '@angular/core';
import { ShelterService } from '../shelter.service';
import { ActivatedRoute, Params, Router, Route } from '@angular/router';
import { Pet } from '../pet';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private _shelterService: ShelterService,
    private _router: Router
  ) { }

  // pet = new Pet();
  petForm: any;
  displayErr: Boolean;
  errors = [];

  ngOnInit() {
    this.petForm = {
      name: "",
      type: "",
      desc: "",
      skill1: "",
      skill2: "",
      skill3: "",
    }
  }

  submitPet() {
    let observable = this._shelterService.createPet(this.petForm);
    observable.subscribe(res => {
      console.log(res);
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

  goHome() {
    this._router.navigate(['/home']);
  }
}
