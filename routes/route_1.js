var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.sendFile(__dirname + "/public/" + "/index.html");
});
module.exports = router;