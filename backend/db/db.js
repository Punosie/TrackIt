const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to the database')
    } catch (error) {
        console.log('Error connecting to the database', error)
    }
};

module.exports = db;