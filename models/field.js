/***
 * A model to represent fields
 */
var baseModel = require('./baseModel'),
    Field,
    Fields;

Field = baseModel.Model.extend({
    tableName: 'fields'
});

Fields = baseModel.Collection.extend({
    model: Field
});

module.exports = {
    Field: Field,
    Fields: Fields
};