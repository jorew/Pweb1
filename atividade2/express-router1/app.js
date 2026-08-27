const express = require('express')
const app = express()
var router = express.Router();
var indexRouter = require('./router/index');
var usersRouter = require('./router/users');


app.use('/', indexRouter);

router.get('/', function(req, res, next) {
res.render('index', { title: 'Express index' });
});


app.use('/users', usersRouter);

router.get('/users', function(req, res, next) {
res.send('/users');
});

app.use('/news');

app.use('/about');




module.exports = router;