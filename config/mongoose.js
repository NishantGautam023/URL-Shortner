require('dotenv').config();
/* creating our database https://mongoosejs.com/docs/ */

// require the library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/urlShortener', {
  // Here process.env.MONGODB_URI is if we using mongoAtlas add ons for deployment
  // i.e use heroku first if that does not exist then use mongodb://
    useNewUrlParser: true,
    useUnifiedTopology: true 
    // The above 2 statements helps us to avoid  the Deprecation Warning !!!
})

// acquire the connection (to check if successful)
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'connection error while connecting to db :'));

// if up and running then print
db.once('open', function() {
  // we're connected!
  console.log(`Successfully connected to the database`)
});


module.exports = db;

