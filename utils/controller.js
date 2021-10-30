const {createFile} = require('./filesystem')

const {renderControllerTemplate} = require('../templates/controller')

const fs = require('fs')


const createController = async (nameOfFile)=>{


    createFile(`${nameOfFile}.js`,"controllers")
    .then(

        res=>{

            fs.writeFile(`controllers/${nameOfFile}.js`,renderControllerTemplate(),(err)=>{


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

module.exports = {createController}