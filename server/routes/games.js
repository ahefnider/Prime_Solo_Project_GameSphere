var express = require('express');
var router = express.Router();
var Game = require('../models/game');
var passport = require('passport');
var path = require('path');

router.get('/', function (req, res) {
    if(req.isAuthenticated()) {
      Game.find({user: req.user.username}, function (err, games) {
    res.send(games);
  });
} else {
  // failure best handled on the server. do redirect here.
  console.log('not logged in');
  res.send(false);
}
});

router.post('/', function (req, res) {
  var game = new Game(req.body);
if(req.isAuthenticated()) {
  game.user = req.user.username;
  console.log('User Authenticated');
  game.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201);
  });
} else {
  res.send(false);
}
});

router.put('/:id', function (req, res) {
  if(req.isAuthenticated()) {
    console.log('User Authenticated Update');
  Game.findByIdAndUpdate(req.params.id, req.body, function (err, game) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.status(204).send(game);
  });
} else {
  res.send(false);
}
});

router.delete('/:id', function (req, res) {
  if(req.isAuthenticated()) {
    console.log('User Authenticated Delete');
  Game.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.sendStatus(204);
  });
} else {
  res.send(false);
}
});


module.exports = router;
