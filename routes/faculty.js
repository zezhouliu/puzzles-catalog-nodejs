var model = require('../models/faculty');

// GET /faculty
exports.list = function(req, res){
    new model.Faculty_all().fetch().then(function (faculty) {
        res.render('faculty/index', {faculty: faculty.toArray()});
    });
};

// GET /faculty/:id
exports.show = function(req, res) {
    new model.Faculty({id: req.params.id}).fetch().then(function (faculty) {
        res.render('faculty/show', {faculty: faculty});
    });
};

// POST /faculty
exports.create = function(req, res) {
    console.log("PARAMS:", req.params)
    new model.Faculty({
        first: req.body.first,
        middle: req.body.middle,
        last: req.body.last,
        suffix: req.body.suffix,
        faculty_id: req.body.faculty_id,
    }).save().then(function (faculty) {
        res.redirect('/faculty');
    });
};

// GET /faculty/:id/edit
exports.edit = function(req, res) {
    new model.Faculty({id: req.params.id}).fetch().then(function (faculty) {
        res.render('faculty/edit', {faculty: faculty});
    });
};

// PUT /faculty/:id
exports.update = function (req, res) {
    console.log("UPDATING");
    new model.Faculty({id: req.params.id}).fetch().then(function (faculty) {
        faculty.set('first', req.body.first);
        faculty.set('middle', req.body.middle);
        faculty.set('last', req.body.last);
        faculty.set('suffix', req.body.suffix);
        faculty.set('faculty_id', req.body.faculty_id);
        faculty.save().then(function () {
            res.redirect('/faculty');
        });
    });
};

// DELTETE /faculty/:id
exports.destroy = function(req, res) {
  new model.Faculty({id: req.params.id}).destroy().then(function() {
      res.redirect('/faculty');
  });
};
