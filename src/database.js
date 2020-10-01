// first of all we need to import mongo
const mongoose = require('mongoose');

const uri = process.env.URI ? process.env.URI : 'mongodb://localhost/default_database';

// now we need to write the especifications for our mongodb connection
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true
})

const connection = mongoose.connection;

// once the connection is open, we want a message in console
connection.once('open', ()=>{
    console.log('Connection done');
});