/*var express = require("express");
var path = require("path");
var app = express();

app.set("port", (process.env.PORT || 5000));

//Add static directories to make life easier
app.use(express.static(path.join(__dirname+"/views")));
app.use(express.static(path.join(__dirname+"/styles")))
app.use(express.static(path.join(__dirname+"/javascript")))



//Routers ------------------------------------------------------------
app.route("/")
    .get(function(req,res,next){
        res.sendFile(path.join(__dirname+"/views/main.html"))
    })

//--------------------------------------------------------------------


//If there is a 500 error, run this
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send("Server-Side Error");
})

//if neither a page router or error were triggered then we 
//likely have a 404 error, send this file then
app.use(function(req, res, next){
    res.status(404);
    res.sendfile(path.join(__dirname+"/views/status404.html"))
})

app.listen(app.get("port", function(){
    console.log("Node app is running on port", app.get("port"));
}))

*/
var express = require("express");
var path = require("path");
var app = express();

app.set('port', (process.env.PORT || 5000));



app.use(express.static(path.join(__dirname+"/views")));
app.use(express.static(path.join(__dirname+"/styles")))
app.use(express.static(path.join(__dirname+"/javascript")))

//page routers
app.route("/")
    .get(function(req,res, next){
        res.sendFile(path.join(__dirname + '/views/main.html'));
    })
app.route("/about.html")
    .get(function(req,res, next){
        res.sendFile(path.join(__dirname + '/views/about.html'));
})
app.route("/application.html")
    .get(function(req,res, next){
        res.sendFile(path.join(__dirname + '/views/application.html'));
})
app.route("/contact_us.html")
    .get(function(req,res, next){
        res.sendFile(path.join(__dirname + '/views/contact_us.html.html'));
})

//---------------------------------------------------------------
app.use(function(err, req,res,next){
    console.error(err.stack)
    res.status(500).send("Something broke :/");
})

//if neither a page router or error were triggered then we 
//likely have a 404 error, send this file then
app.use(function(req, res, next){
    res.status(404);
    res.sendfile(path.join(__dirname+"/views/status404.html"))
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});