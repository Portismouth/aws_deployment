import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShelterService {

  constructor(private _http: HttpClient) { }

  getAllPets() {
    return this._http.get('/api/pets');
  }

  getPetById(petId) {
    return this._http.get('/api/pet/' + petId);
  }

  createPet(newPet) {
    return this._http.post('/api/pets', newPet);
  }

  updatePet(pet){
    return this._http.put('api/pet/' + pet.id, pet);
  }

  adoptPet(petId) {
    return this._http.delete('/api/pet/' + petId);
  }

  likePet(petId){
    return this._http.get('/api/likepet/' + petId)
  }
}
