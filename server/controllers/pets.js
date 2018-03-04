var mongoose = require('mongoose');
var Pet = mongoose.model('Pet');

module.exports = {
    getAllPets: function (req, res) {
        Pet.find({}, function (err, pets) {
            if (err) {
                res.send(err);
            } else {
                res.send(pets);
            }
        });
    },
    getPetById: function (req, res) {
        Pet.findById(req.params.id, function (err, pet) {
            if (err) {
                res.send(err);
            } else {
                res.send(pet);
            }
        })
    },
    createPet: function (req, res) {
        newPet = new Pet({
            name: req.body.name,
            petType: req.body.type,
            desc: req.body.desc,
            skills: []
        });
        if (req.body.skill1) newPet.skills.push(req.body.skill1);
        if (req.body.skill2) newPet.skills.push(req.body.skill2);
        if (req.body.skill3) newPet.skills.push(req.body.skill3);
        console.log(newPet);
        newPet.save(function (err) {
            if (err) {
                res.send(newPet.errors);
            } else {
                res.send({ message: "success" })
            }
        })
    },
    updatePet: function (req, res) {
        Pet.findByIdAndUpdate(req.params.id, req.body,
            { runValidators: true },
            function (err, pet) {
                if (err) {
                    res.send(err.errors);
                } else {
                    res.send({ message: "success" })
                }
            })
    },
    deletePet: function (req, res) {
        Pet.findByIdAndRemove(req.params.id, function (err, pet) {
            if (err) {
                res.send({ message: "problem deleting" })
            } else {
                res.send(pet);
            }
        });
    },
    likePet: function (req, res) {
        Pet.findById(req.params.id, function (err, pet) {
            if (err) {
                res.send(err);
            } else {
                console.log(pet.likes);
                pet.likes += 1;
                pet.save(function (saveErr) {
                    if(saveErr) {
                        res.send(saveErr);
                    } else {
                        res.send(pet);
                    }
                })
            }
        })
    }
}