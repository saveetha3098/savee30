var express = require('express');
var router = express.Router();
var moviescontroller=require('../controller/moviescontroller');
/* GET users listing. */
router.get('/all',moviesController.getAllmovies);
.post('/add',moviesController.addNewMovie);
module.exports = router;
