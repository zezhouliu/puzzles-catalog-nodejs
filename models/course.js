/***
 * A model to represent courses
 */
var baseModel = require('./baseModel'),
    Course,
    Courses;

Course = baseModel.Model.extend({
    tableName: 'courses'
});

Courses = baseModel.Collection.extend({
    model: Course
});

module.exports = {
    Course: Course,
    Courses: Courses
};
