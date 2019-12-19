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
router.get('/regles_jeu', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/regles_jeu.html')); //TODO
});
router.get('/jouer_suite', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/jouer_suite.html'));  //TODO
});
router.get('/membres', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/membres.html'));
});
router.get('/chat', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/chat.html'));
});
router.get('/comptejoueur', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/comptejoueur.html'));
});
router.get('/creationCompte', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/creationCompte.html'));
});
router.get('/carte', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/carte.html'));
});
router.get('/liste', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/liste.html'));  //TODO
});
router.get('/triparnote', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/triparnote.html'));  //TODO
});
router.get('/trinbjoueur', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/trinbjoueur.html'));  //TODO
});
router.get('/tritypeEtb', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/tritypeEtb.html'));  //TODO
});
router.get('/itineraire', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/itineraire.html'));  //TODO
});




// the catch all route
router.all('*', (req, res) => {
  res.status(404).send({msg: 'not found'});
});

module.exports = router;