#!/usr/bin/env node

const yargs = require('yargs')
const modelutils = require('../utils/model')
const {createServer} = require('../utils/server')
const {createDatabase} = require('../utils/database')
const { createController } = require('../utils/controller')
const {createRoute} = require('../utils/route')
const {createCrudGenerator} = require('../utils/crudgenerator')
const {createAuth} = require('../utils/auth')


// command to create a model
yargs.command('model <lemodel> [typedb] [fields..]', 'create a model', (yargs) => {
    yargs.positional('lemodel', {
      describe: 'URL to fetch content from',
      type: 'string',     
      }).positional('typedb', {
      describe: 'type of db - choices: mongoose - sequelize',    
     }).positional('fields', {
        describe: 'fields wanted for the model - usage: namefield-typefield-required  example: title-string-true body-text-false (for mongoose) &&  firstName:string (for sequelize)',
        type:'array'    
       })   
   },(argv) => {
     //console.log(argv.fields)
     modelutils.createModel(argv.lemodel,argv.typedb,argv.fields)

})


// command to create a server
yargs.command('server <nameofserver> [typedb]', 'create a server', (yargs) => {
    yargs.positional('nameofserver', {
      describe: 'Name of the server file without extension',
      type: 'string',     
      }).positional('typedb', {
        describe: 'type of db - choices: mongoose - sequelize (attention faire npx sequelize_cli init  avant tout)', 
        type:'string'   
       })
   },(argv) => {
    createServer(argv.nameofserver,argv.typedb)

})



// command to create a database
yargs.command('database <nameoffile>', 'create a database connexion file for mongoose', (yargs) => {
    yargs.positional('nameoffile', {
      describe: 'File name for the database connexion file',
      type: 'string'     
      })
   },(argv) => {
    createDatabase(argv.nameoffile)

}) 


// command to create a controller
yargs.command('controller <nameofmodel> [typedb] [typeofcrud] [paginationtype]', 'create a controller', (yargs) => {
  yargs.positional('nameofmodel', {
    describe: 'Name of the model for which you create a controller',
    type: 'string',       
    }).positional('typedb', {
      describe: 'type of db - choices: mongoose - sequelize (attention faire npx sequelize_cli init  avant tout)', 
      type:'string'   
     }).positional('typeofcrud', {
      describe: 'type of crud- choices: api | ejs', 
      type:'string'   
     }).positional('paginationtype', {
      describe: 'pagination for get and search - choices: none | cursor | skip', 
      type:'string'   
     })
 },(argv) => {
  createController(argv.nameofmodel,argv.typedb,argv.typeofcrud,argv.paginationtype)

})

// command to create routes for a model
yargs.command('route <nameOfModel> <typeofcrud>', 'create the routes for a model or ressource', (yargs) => {
  yargs.positional('nameOfModel', {
    describe: 'name of model for which we want to create the routes',
    type: 'string'     
    })
    yargs.positional('typeofcrud', {
      describe: 'the type fo crud for which we create routes : api or ejs',
      type: 'string'     
      })
 },(argv) => {
  createRoute(argv.nameOfModel,argv.typeofcrud)

}) 


// command to create crud generator for a model
yargs.command('crud <nameOfModel>', 'create the crud generator a model or ressource', (yargs) => {
  yargs.positional('nameOfModel', {
    describe: 'name of model',
    type: 'string'     
    })    
 },(argv) => {
  createCrudGenerator(argv.nameOfModel)

}) 

// command to create an auth
yargs.command('auth <typeofdb>', 'create an auth with dashboard and login register', (yargs) => {
  yargs.positional('typeofdb', {
    describe: 'type of database',
    type: 'string'     
    })    
 },(argv) => {
  createAuth(argv.typeofdb)

}) 

.help()
    .alias('h','help')
    .argv
