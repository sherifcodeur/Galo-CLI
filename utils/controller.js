const {createFile} = require('./filesystem')


// template for m (mongoose) api(typecrud)
const {renderControllerTemplatemapi} = require('../templates/controllers/controller-m-api')

// template for mongoose and ejs
const {renderControllerTemplatemejs} = require('../templates/controllers/controller-m-ejs')


// template for sequelize and api crud
const {renderControllerTemplatesapi} = require('../templates/controllers/controller-s-api')


//template for sequelize and ejs
const {renderControllerTemplatesejs} = require('../templates/controllers/controller-s-ejs')

const fs = require('fs')


const createController = async (nameOfModel,typedb,typecrud,paginationtype)=>{

if(typedb =="mongoose" && typecrud=="api"){


            createFile(`${nameOfModel}Controller.js`,"controllers")
            .then(

                res=>{

                    fs.writeFile(`controllers/${nameOfModel}Controller.js`,renderControllerTemplatemapi(nameOfModel),(err)=>{


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

if(typedb =="mongoose" && typecrud=="ejs"){


    createFile(`${nameOfModel}Controller.js`,"controllers")
    .then(

        res=>{

            fs.writeFile(`controllers/${nameOfModel}Controller.js`,renderControllerTemplatemejs(nameOfModel),(err)=>{


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

if(typedb =="sequelize" && typecrud=="api"){

    createFile(`${nameOfModel}Controller.js`,"controllers")
    .then(

        res=>{

            fs.writeFile(`controllers/${nameOfModel}Controller.js`,renderControllerTemplatesapi(nameOfModel),(err)=>{


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

if(typedb =="sequelize" && typecrud=="ejs"){

    createFile(`${nameOfModel}Controller.js`,"controllers")
    .then(

        res=>{

            fs.writeFile(`controllers/${nameOfModel}Controller.js`,renderControllerTemplatesejs(nameOfModel),(err)=>{


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