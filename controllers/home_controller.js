const Urls = require('../models/urls')

module.exports.home = async function(req,res) {
    // When we hit the submit button, url was not showing up, to show our url 
    const Urls_short = await Urls.find()  
    res.render('home', {
      Urls_short: Urls_short
      // now we can loop through every single short Urls in the home.ejs
    })
}

// Action for Short urls
module.exports.shortUrls = async (req, res) => {
    // as our collection has  been imported URL (line 6 server.js)
  await  Urls.create({full: req.body.fullUrl})
  res.redirect('/') // redirect to the homepage
}

module.exports.shortUrl =  async function(req, res) {
  //  use our model to find one based on short property.
  const shortUrl =  await Urls.findOne({   short: req.params.shortUrl });
  // calling findone method in our database, passing in our search query  which is telling
  // find which ever is having short id from our url(shortUrl) and save it to const shortUrl


  // if url does not exists
  if(shortUrl ==null)  {
    return res.sendStatus(404)
  }
  // if found the url
  shortUrl.clicks++ // append one to the clicks
  shortUrl.save()  // update the url with new click value

  res.redirect(shortUrl.full) // getting the full and redirecting to it. 
   

}





// Urls.create({full: req.body.fullUrl}) This is a asynchronous action. This happens
// in the background, and we wanna make sure we wait,untill this is finished. 
// Thus make it async function. 
// module.exports.shortUrls = async function(req, res) {

//     and then await for 
//     await  Urls.create({full: req.body.fullUrl})
//     wait for the above one for finish  creating before we move on!!