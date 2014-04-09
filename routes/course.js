var model = require('../models/course');

// GET /courses
exports.list = function(req, res){
    new model.Courses().fetch().then(function (courses) {
        res.render('course/index', {courses: courses.toArray()});
    });
};

// GET /courses/:id
exports.show = function(req, res) {
    new model.Course({id: req.params.id}).fetch().then(function (course) {
        res.render('course/show', {course: course});
    });
};

// POST /courses
exports.create = function(req, res) {
    console.log("PARAMS:", req.params)
    new model.Course({
        // XXX: PARAMS HERE
        cat_num: req.body.cat_num,
        term: req.body.term,
        bracketed: req.body.bracketed,
        field: req.body.field,
        number: req.body.number,
        title: req.body.title,
        faculty: req.body.faculty,
        description: req.body.description,
        prerequisites: req.body.prerequisites,
        notes: req.body.notes,
        meetings: req.body.meetings,
        building: req.body.building,
        room: req.body.room

    }).save().then(function (course) {
        res.redirect('/courses');
    });
};

// PUT /courses/:id
exports.update = function (req, res) {
    console.log("UPDATING COURSE");
    new model.Course({id: req.params.id}).fetch().then(function (course) {
        course.set('cat_num', req.body.cat_num);
        course.set('term', req.body.term);
        course.set('bracketed', req.body.bracketed);
        course.set('field', req.body.field);
        course.set('number', req.body.number);
        course.set('title', req.body.title);
        course.set('faculty', req.body.faculty);
        course.set('description', req.body.description);
        course.set('prerequisites', req.body.prerequisites);
        course.set('notes', req.body.notes);
        course.set('meetings', req.body.meetings);
        course.set('building', req.body.building);
        course.set('room', req.body.room);
        
        course.save().then(function () {
            res.redirect('/courses');
        });
    });
};

// GET /course/:id/edit
exports.edit = function(req, res) {
    new model.Course({id: req.params.id}).fetch().then(function (course) {
        res.render('course/edit', {course: course});
    });
};

// DELETE /course/:id
exports.destroy = function(req, res) {
  new model.Course({id: req.params.id}).destroy().then(function() {
      res.redirect('/courses');
  });
};
