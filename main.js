#!/usr/bin/env node

const yargs = require('yargs')
const modelutils = require('./utils/model')



yargs.command('model <lemodel> [typedb] [fields..]', 'create a model', (yargs) => {
    yargs.positional('lemodel', {
      describe: 'URL to fetch content from',
      type: 'string',     
      }).positional('typedb', {
      describe: 'type of db - choices: mongoose - sequelizemysql - sequelizepg',    
     }).positional('fields', {
        describe: 'fields wanted for the model - usage: namefield-typefield-required  example: title-string-true',
        type:'array'    
       })   
   },(argv) => {
    // console.log('this command will be run by default ' +argv.lemodel +argv.fields)
     modelutils.createModel(argv.lemodel,"mongoose")

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
