/***
 * A model to represent fields
 */
var baseModel = require('./baseModel'),
    Faculty,
    Faculty_all;

Faculty = baseModel.Model.extend({
    tableName: 'faculty'
});

Faculty_all = baseModel.Collection.extend({
    model: Faculty
});

module.exports = {
    Faculty: Faculty,
    Faculty_all: Faculty_all
};
