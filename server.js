var express = require('express'),
    server = express(),
    path = require('path'),
    logger = require('morgan')('dev');

/**
* Addtional variables for usage. This section is great for setting up port or any other constants
* that you may need in the server
* file.
* */
var port = process.env.PORT || 8080; //This is a standard setup. You can do this many ways. If you want deploy then you need the process.env.PORT
/**
* Middleware setup
* These are functions that are run before running the functions that are attached to each 'route' such as server.get('/', function()...);
* Middleware is one of the cornerstone attributes of Express
* If we need to check if certain information is true before each routehandling function is run (user auth, handling errors, etc.) then you can
* get middleware for that.
* */
server.use(logger);
server.use(express.static(path.join(__dirname,'public')));


/**
* ROUTES: These are the url patterns that you are allowing your server to respond to.
* For example: '/' is the home route. That means when someone navigates to your website then
*             this is the first thing that the will see.
* */
server.get('/', function(req, res){
  res.sendFile('public/html/index.html', {root: __dirname});
});


//The server does not start listening for requests until it reaches this line.
//The previous lines are just setting up the server application with all of the
//settings that you want your server to have.
server.listen(port, function(){
  console.log('Now listening on port '+ port);
});
