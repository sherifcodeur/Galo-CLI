
const {createFile} = require('./filesystem')

const {renderCrudGeneratorTemplate} = require('../templates/crudgenerator')

const fs = require('fs')

const createCrudGenerator = async (nameOfModel)=>{


    createFile(`${nameOfModel}CrudGenerator.js`,"crudgenerators")
    .then(

        res=>{

            fs.writeFile(`crudgenerators/${nameOfModel}CrudGenerator.js`,renderCrudGeneratorTemplate(nameOfModel),(err)=>{

            if(err){

                console.log(err)
            }else{

                console.log("succes writing crud generator ")
            }

        })
        
        }

        
    )
    .catch(err=>{

        console.log(err)
    })


}


module.exports = {createCrudGenerator}