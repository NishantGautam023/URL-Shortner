const express = require('express');
const port =  process.env.PORT || 3000;
const path = require('path')

//  ********Requiring our models***************** 
const Urls = require('./models/urls')

/* ******* Including the database from config/mongoose.js   */
const db = require('./config/mongoose');
const app = express();

// ***********Setting up our view engine********
app.set('view engine', 'ejs')
app.set('views', './views')

// ********* static files and parsing the form data
app.use(express.urlencoded({
    extended: true // helps us to avoid body-parser deprecated warning
}));

app.use(express.static('assets')) // only on require we use './'


// **********using express router ********************
app.use('/', require('./routes'));



app.listen(port, (err) => {
    if(err) {
        console.log(`There is an error ${err}`)
        return;
    }
    console.log(`Our server is running at port ${port}`)
})