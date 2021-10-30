const {createFile} = require('./filesystem')


// template for m (mongoose) api(typecrud)
const {renderControllerTemplatemapi} = require('../templates/controllers/controller-m-api')

const fs = require('fs')


const createController = async (nameOfModel,typedb,typecrud,paginationtype)=>{

if(typedb =="mongoose" && typecrud=="api"){


            createFile(`${nameOfModel}Controller.js`,"controllers")
            .then(

                res=>{

                    fs.writeFile(`controllers/${nameOfModel}Controller.js`,renderControllerTemplatemapi(),(err)=>{


                    if(err){

                        console.log(err)
                    }else{

                        console.log("succes writing controller template")
                    }



                })
                
                }

                
            )
            .catch(err=>{

                console.log(err)
            })


}




}

module.exports = {createController}