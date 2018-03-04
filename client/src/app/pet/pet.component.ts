import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  @Input() pet

  constructor() { }

  ngOnInit() {
  }

}
