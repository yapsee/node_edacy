const express = require('express'); //add express by npm 
const app = express();

require('dotenv').config(); // add dotenv by npm  for config

const Files = require('edacy-files-walk');


const {DB_USERNAME, DB_PASS, NODE_DEV, PORT} = process.env // const DB_USERNAME = process.env.DB_USERNAME

const chalk = require('chalk') // add chalk for console styling

const ProgressBar =  require('progress') // add progressbar for console 

app.use(express.json())


require ('./api/modules/auth/auth.public.routes')(app)
require ('./api/modules/auth/auth.guard')(app)
require('./api/modules/products/products.routes')(app)
require ('./api/modules/reservations/reservations.routes')(app)



// var bodyParser = require('body-parser')
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// // parse application/json


//  var routes = Files.walk(__dirname + '/api/modules');             // parse all files from 'api/modules'

//  for (var i = 0; i < routes.length; i++)                         // loop to retrieve file by file 
//    if (routes[i].indexOf('public.routes') !== -1)               // check if there is a '.public.routes' files
//    require(routes[i])(app);                                   //require('path_route')(app)

// // USE GUARD MIDDLEWARE
// require('./api/modules/auth/auth.guard')(app);

// // IMPORT PRIVATE ROUTES
// for (var i = 0; i < routes.length; i++)
//     if (routes[i].indexOf('routes') !== -1 && routes[i].indexOf('public.routes') === -1)
//     require(routes[i])(app);


app.listen(PORT,()=>{
  console.log('server listening')
})

const bar = new ProgressBar(':bar', {total: 50});
const timer = setInterval(()=>{
  bar.tick()
  if(bar.complete){
clearInterval(timer)
  }
},1000)



console.log(chalk.bold(chalk.red(PORT)) )