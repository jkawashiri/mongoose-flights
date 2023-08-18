var express = require('express');
var router = express.Router();

var flightsCtrl = require('../controllers/flights')

// GET /movies
router.get('/', flightsCtrl.index);
// GET /movies/new
router.get('/new', flightsCtrl.new);
// POST /movies
router.post('/', flightsCtrl.create);

module.exports = router;
