
const {createFile} = require('./filesystem')
const fs = require('fs')

const {renderServerTemplate} = require('../templates/server')

const createServer = async (nameOfFile,typedb)=>{

    createFile(`${nameOfFile}.js`)
    .then(

        res=>{

            fs.writeFile(`${nameOfFile}.js`, renderServerTemplate(typedb),(err)=>{

                if(err){

                    console.log(err)
                }else{

                    console.log("succes writing template")
                }

            })       
        
        }
    )
    .catch(err=>console.log(err))

}


module.exports = {createServer}