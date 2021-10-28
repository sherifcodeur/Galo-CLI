const fs = require('fs')

const {createDirectory , createFile} = require('./filesystem')

const {renderModelTemplateMongoose} = require('../templates/models/model-mongoose')

const {renderModelTemplateSequelizemysql} = require('../templates/models/model-sequelize-mysql')

const {renderModelTemplateSequelizepg} = require('../templates/models/model-sequelize-pg')



// create a model - argument model name -if no models directory exists we create it
const createModel = (modelToCreate ,typedb)=>{


    if(typedb === "mongoose"){

            createFile(`${modelToCreate}.js`,"models")
                .then(

                    res=>{

                    
                        fs.writeFile(`models/${modelToCreate}.js`, renderModelTemplateMongoose(modelToCreate),(err)=>{

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

        
        createFile(`${modelToCreate}.js`,"models")
                .then(

                    res=>{

                    
                        fs.writeFile(`models/${modelToCreate}.js`, renderModelTemplateSequelizemysql(modelToCreate),(err)=>{

                            if(err){

                                console.log(err)
                            }else{

                                console.log("succes writing template")
                            }

                        })
                    
                    
                    }
                )
                .catch(err=>console.log(err))

    }else if(typedb ==="sequelize-pg"){

        createFile(`${modelToCreate}.js`,"models")
                .then(

                    res=>{

                    
                        fs.writeFile(`models/${modelToCreate}.js`, renderModelTemplateSequelizepg(modelToCreate),(err)=>{

                            if(err){

                                console.log(err)
                            }else{

                                console.log("succes writing template")
                            }

                        })
                    
                    
                    }
                )
                .catch(err=>console.log(err))


    }else{

        throw Error("pas la bonne base")
    }
  


}




module.exports = {createModel}