var express = require('express');
var router = express.Router();

/* GET Computation Page. */
router.get('/', function(req, res, next) {
    var x = Math.floor(Math.random() * 10);
    var y = Math.floor(Math.random() * 10);
    var z = Math.floor(Math.random() * 10);
    var w = Math.floor(Math.random() * 10);
    var v = Math.floor(Math.random() * 10);
    var powFunction = Math.pow(x,y);
    var signFunction = Math.sign(z);
    var tanhFunction = Math.tanh(w);
    var truncFunction = Math.trunc(v);

  res.render('computation', 
  { 
    title: 'Manisha Reddy Arragari',
    x: x,
    y: y,
    z: z,
    w: w,
    v: v,
    pow: powFunction,
    signh: signFunction,
    tanh: tanhFunction,
    trunc: truncFunction

 });

});

module.exports = router;