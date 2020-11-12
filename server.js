const express = require('express');
const port = 8000;
const app = express();

/* ******* setting up our database    https://mongoosejs.com/docs/ *********  */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/urlShortneer', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
    // The above 2 statements helps us to avoid  the Deprecation Warning !!!
})

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