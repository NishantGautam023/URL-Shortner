const Urls = require('../models/urls')

module.exports.home = function(req,res) {
    res.render('home')
}

// Action for Short urls
module.exports.shortUrls = async (req, res) => {
    // as our collection has  been imported URL (line 6 server.js)
  await  Urls.create({full: req.body.fullUrl})
  res.redirect('/') // redirect to the homepage
}







// Urls.create({full: req.body.fullUrl}) This is a asynchronous action. This happens
// in the background, and we wanna make sure we wait,untill this is finished. 
// Thus make it async function. 
// module.exports.shortUrls = async function(req, res) {

//     and then await for 
//     await  Urls.create({full: req.body.fullUrl})
//     wait for the above one for finish  creating before we move on!!