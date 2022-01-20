var mongoose = require('mongoose');

var ChampSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    stats: {
        hp: {
            type: String,
            required: true
        },
        mp: {
            type: String,
            required: true
        },
        movespeed: {
            type: String,
            required: true
        },
        armor: {
            type: String,
            required: true
        },
        attackrange: {
            type: String,
            required: true
        },
        attackdamage: {
            type: String,
            required: true
        },
        attackspeed: {
            type: String,
            required: true
        },
    },
    icon: {
        type: String,
        required: true
    }
},{collection : 'champ'});

module.exports = mongoose.model('champ', ChampSchema);