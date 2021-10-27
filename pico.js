#!/usr/bin/env node

const yargs = require('yargs')



yargs.command('model <lemodel> [mak] [fields..]', 'create a model', (yargs) => {
    yargs.positional('lemodel', {
      describe: 'URL to fetch content from',
      type: 'string',     
      }).positional('mak', {
      describe: 'type de db',    
     }).positional('fields', {
        describe: 'fields wanted',
        type:'array'    
       })   
   },(argv) => {
    console.log('this command will be run by default ' +argv.lemodel +argv.fields)})




    yargs.command({

        command:'controller',
        describe:'create a controller',
    
        handler:function(){
            console.log('creating a new controller')
        }
    })    .help()
    .argv
