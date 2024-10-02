const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://tigerteja1439:-%236gHz-hX9E3%23Lj@cluster0.p8f9ki0.mongodb.net/"
async function connectToMongo() {
    await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
  }

module.exports = connectToMongo
