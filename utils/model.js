const fs = require('fs')
const { exec } = require("child_process");

const {createDirectory , createFile} = require('./filesystem')

const {renderModelTemplateMongoose} = require('../templates/models/model-mongoose')

const {renderModelTemplateSequelizemysql} = require('../templates/models/model-sequelize-mysql')

const {renderModelTemplateSequelizepg} = require('../templates/models/model-sequelize-pg')



// create a model - argument model name -if no models directory exists we create it
const createModel = async (modelToCreate ,typedb,fields)=>{


    if(typedb === "mongoose"){

            createFile(`${modelToCreate}.js`,"models")
                .then(

                    res=>{

                    
                        fs.writeFile(`models/${modelToCreate}.js`, renderModelTemplateMongoose(modelToCreate,fields),(err)=>{

                            if(err){

                                console.log(err)
                            }else{

                                console.log("succes writing template")
                            }

                        })
                    
                    
                    }
                )
                .catch(err=>console.log(err))

    }else if(typedb ==="sequelizemysql"){

        
        await createDirectory('models')
        await createDirectory('migrations')
        exec(`npx sequelize-cli model:generate --name ${modelToCreate} --attributes firstName:string`, (error, data, getter) => {
            if(error){
                console.log("error",error.message);
                return;
            }
           
        
        });



    }else if(typedb ==="sequelizepg"){

        await createDirectory('models')
        await createDirectory('migrations')
        exec(`npx sequelize-cli model:generate --name ${modelToCreate} --attributes firstName:string`, (error, data, getter) => {
            if(error){
                console.log("error",error.message);
                return;
            }
           
        
        });

    }else{

        throw Error("pas la bonne base")
    }
  


}




module.exports = {createModel}