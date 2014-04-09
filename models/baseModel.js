var Bookshelf = require('bookshelf'),
    baseModel;

// Initialize a new bookshelf instance, for reference elsewhere in the app.
baseModel = Bookshelf.initialize({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'jharvard',
        password: 'crimson',
        database: 'catalog',
        charset: 'utf8'
    }
});

module.exports = baseModel;