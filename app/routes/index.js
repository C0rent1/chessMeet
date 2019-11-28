var express = require('express');
var router = express.Router();
var path = require('path');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/acceuil.html'));
});

router.get('/acceuil', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/acceuil.html'));
});

router.get('/jouer', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/jouer.html'));
});
router.get('/compte', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/compte.html'));
});

// the catch all route
router.all('*', (req, res) => {
  res.status(404).send({msg: 'not found'});
});

module.exports = router;