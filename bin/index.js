#!/usr/bin/env node

const yargs = require('yargs')
const modelutils = require('../utils/model')
const {createServer} = require('../utils/server')
const {createDatabase} = require('../utils/database')


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



// command to create a server
yargs.command('database <nameoffile> ', 'create a database connexion file for mongoose', (yargs) => {
    yargs.positional('nameoffile', {
      describe: 'File name for the database connexion file',
      type: 'string',     
      })
   },(argv) => {
    createDatabase(argv.nameoffile)

})  .help()
    .alias('h','help')
    .argv
