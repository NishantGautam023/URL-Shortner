// Creating our Schema  https://mongoosejs.com/docs/guide.html




const mongoose = require('mongoose');
const shortId = require('shortid')
const shortUrlSchema = new mongoose.Schema({
    // this schema takes an object, which is going to be all of our columns in the database
    full: {
        type: String,
        required: true
    }, 
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        required: true,
         default: 0
    }

})

// variable which take the name of the model and schema 
const Urls = mongoose.model('Urls',shortUrlSchema);

// another approch of doing it
// const Urls = mongoose.model('Urls', shortUrlSchema);


// export it
module.exports = Urls;






/*
As our form has only one url to enter, we need some way to some way to generate short
version of the url.  We are having a library called nanoID 
https://github.com/ai/nanoid/               https://www.npmjs.com/package/nanoid

npm install nanoid : This will create unique short identifier.








*/