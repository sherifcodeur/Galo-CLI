
const {createFile} = require('./filesystem')
const fs = require('fs')

const modelUserTemplate = require('../templates/auth/modeluser')






// we create the auth system with admin dashboard
function createAuth(typeofdb){



// on doit creer le modele d user 

createModelUser()



// on doit creer le controller



// on doit creer les views




//on doit creer les routes pour auth













}


function createModelUser(){

    createFile(`${User}.js`,"models").then(res=>{


        fs.writeFile(`models/${User}.js`,modelUserTemplate(),(err)=>{

            if(err){

                console.log(err)
            }else{

                console.log("succes writing model user")
            }



        })



    }).catch(err=>console.log(err))

}






module.exports = {createAuth}