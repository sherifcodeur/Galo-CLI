#!/usr/bin/env node

const yargs = require('yargs')
const modelutils = require('../utils/model')
const {createServer} = require('../utils/server')



yargs.command('model <lemodel> [typedb] [fields..]', 'create a model', (yargs) => {
    yargs.positional('lemodel', {
      describe: 'URL to fetch content from',
      type: 'string',     
      }).positional('typedb', {
      describe: 'type of db - choices: mongoose - sequelizemysql - sequelizepg',    
     }).positional('fields', {
        describe: 'fields wanted for the model - usage: namefield-typefield-required  example: title-string-true body-text-false (for mongoose) &&  firstName:string (for sequelize)',
        type:'array'    
       })   
   },(argv) => {
     //console.log(argv.fields)
     modelutils.createModel(argv.lemodel,argv.typedb,argv.fields)

})



yargs.command('server <nameofserver>', 'create a server', (yargs) => {
    yargs.positional('nameofserver', {
      describe: 'Name of the server file without extension',
      type: 'string',     
      })
   },(argv) => {
    createServer(argv.nameofserver)

})



    yargs.command({

        command:'controller',
        describe:'create a controller',
    
        handler:function(){
            console.log('creating a new controller')
        }
    })    .help()
    .alias('h','help')
    .argv
