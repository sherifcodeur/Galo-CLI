
const {createFile} = require('./filesystem')

const {renderDatabaseTemplate} = require('../templates/database')

const fs = require('fs')

const createDatabase = async (nameOfFile)=>{




    createFile(`${nameOfFile}.js`,"database")
    .then(

        res=>{

            fs.writeFile(`database/${nameOfFile}.js`,renderDatabaseTemplate(),(err)=>{


            if(err){

                console.log(err)
            }else{

                console.log("succes writing database template")
            }



        })
        
        }

        
    )
    .catch(err=>{

        console.log(err)
    })









}


module.exports = {createDatabase}