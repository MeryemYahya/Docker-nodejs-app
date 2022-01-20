var express = require('express');
var router = express.Router();
var Champ = require('../models/champModel')

router.get('/', function(req, res, next) {
   Champ.find((err, data) => {
        res.render('view2', {
      data:data
    });
    })
   
});

router.get('/add', function(req, res, next) {
   res.render('add_Db');
});

router.post('/add', (req, res) => {
  var champ = new Champ( {
      name: req.body.name,
      title: req.body.title,
      tags: req.body.type,
      stats: {
         hp: req.body.hp,
         mp: req.body.mp,
         movespeed: req.body.ms,
         armor: req.body.armor,
         attackrange: req.body.ar,
         attackdamage: req.body.ad,
         attackspeed: req.body.as
      },
      icon: "https://img.redbull.com/images/c_crop,x_225,y_0,h_958,w_1437/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2017/10/11/f64b8633-e848-4afa-9791-9da869f7bfd7/league-of-legends-champions"
   }).save();
   
   res.redirect("/db");
});

module.exports = router;