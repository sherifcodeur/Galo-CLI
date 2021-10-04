#!/usr/bin/env node
const yargs = require('yargs');


const argv = yargs
            
            .command("add","adds a file",{
                title:{
                    alias:"t",
                    describe:"title of the file",
                    demandOption:true
                }
            },
            function(argv){

                console.log("voici le titre "+argv.title)
            })
            .command("del","deletes a file")            
            .help()
            .alias('h','help')
            .argv;



console.log(argv)