var mongoose = require('mongoose');
var uniqueValidator = require("mongoose-unique-validator")
var Schema = mongoose.Schema;

var petSchema = new Schema({
    name: {
        type: String,
        required: [true, "Pet must have a name!"],
        trim: true,
        unique: true
    },
    petType: {
        type: String,
        required: [true, "Please specify the type of pet."],
        trim: true
    },
    desc: {
        type: String,
        required: [true, "Please tell us a bit about your pet."],
        trim: true
    },
    skills: [{ type: String }],
    likes: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

// petSchema.plugin(uniqueValidator, { message: "This pet is already in our shelter!" })
mongoose.model("Pet", petSchema)