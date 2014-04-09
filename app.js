/**
 * Module dependencies.
 */
var express = require('express'),
    routes = require('./routes'),
    field = require('./routes/field'),
    faculty = require('./routes/faculty'),
    course = require('./routes/course'),
    http = require('http'),
    path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Routes
app.get('/', routes.index);

app.get('/faculty', faculty.list);
app.post('/faculty', faculty.create);
app.get('/faculty/:id', faculty.show);
app.put('/faculty/:id', faculty.update);
app.get('/faculty/:id/edit', faculty.edit);
app.del('/faculty/:id', faculty.destroy);

app.get('/fields', field.list);
app.post('/fields', field.create);
app.get('/fields/:id', field.show);
app.put('/fields/:id', field.update);
app.get('/fields/:id/edit', field.edit);
app.del('/fields/:id', field.destroy);

app.get('/courses', course.list);
app.post('/courses', course.create);
app.get('/courses/:id', course.show);
app.put('/courses/:id', course.update);
app.get('/courses/:id/edit', course.edit);
app.del('/courses/:id', course.destroy);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
