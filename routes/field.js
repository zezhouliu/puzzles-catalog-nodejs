var model = require('../models/field');

// GET /fields
exports.list = function(req, res){
    new model.Fields().fetch().then(function (fields) {
        res.render('field/index', {fields: fields.toArray()});
    });
};

// GET /fields/:id
exports.show = function(req, res) {
    new model.Field({id: req.params.id}).fetch().then(function (field) {
        res.render('field/show', {field: field});
    });
};

// POST /fields
exports.create = function(req, res) {
    console.log("PARAMS:", req.params)
    new model.Field({
        code: req.body.code,
        name: req.body.name
    }).save().then(function (field) {
        res.redirect('/fields');
    });
};

// GET /fields/:id/edit
exports.edit = function(req, res) {
    new model.Field({id: req.params.id}).fetch().then(function (field) {
        res.render('field/edit', {field: field});
    });
};

// PUT /fields/:id
exports.update = function (req, res) {
    console.log("UPDATING");
    new model.Field({id: req.params.id}).fetch().then(function (field) {
        field.set('name', req.body.name);
        field.set('code', req.body.code);
        field.save().then(function () {
            res.redirect('/fields');
        });
    });
};

// DELTETE /fields/:id
exports.destroy = function(req, res) {
  new model.Field({id: req.params.id}).destroy().then(function() {
      res.redirect('/fields');
  });
};