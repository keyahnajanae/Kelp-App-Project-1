// hub for models and db connection
const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/restaurants-db';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose is disconnected');
})

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose error: ${err}`);
})

module.exports = {
    Restaurant: require('./Restaurant.js'),
}