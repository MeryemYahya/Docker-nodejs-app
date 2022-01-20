var express = require('express');
var router = express.Router();
const fs = require('fs');
var path = require('path')

var j = fs.readFileSync(path.join(__dirname, '/data/data.json'), 'utf8')
var data = JSON.parse(j);

router.get('/', function(req, res, next) {
   res.render('view1', {
      data: data
    });
});

router.get('/add', function(req, res, next) {
   res.render('add_Json');
});


router.post('/add', (req, res) => {
  var champ = {
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
   }
   data.unshift(champ)
   fs.writeFile(path.join(__dirname, '/data/data.json'), JSON.stringify(data, null, 2), (err) => {
      if (err) {
         console.log(err);
      }
   })

   res.redirect("/json");
});

module.exports = router;