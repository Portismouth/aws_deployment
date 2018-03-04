var mongoose = require('mongoose');
//require necessary controllers
var pets = require('../controllers/pets.js');

module.exports = function (app) {
    app.route('/api/pets')
        .get(pets.getAllPets)
        .post(pets.createPet)

    app.route('/api/pet/:id')
        .get(pets.getPetById)
        .put(pets.updatePet)
        .delete(pets.deletePet)

    app.get('/api/likepet/:id', function (req, res) {
        pets.likePet(req, res);
    })
}