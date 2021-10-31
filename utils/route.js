const {createFile} = require('./filesystem')

const {renderRouteTemplate} = require('../templates/route')




const createRoute = (modelName,typeofcrud)=>{


    createFile(`${modelName}.js`,"routes")
    .then(

        res=>{

            fs.writeFile(`routes/${modelName}.js`,renderRouteTemplate(modelName,typeofcrud),(err)=>{

            if(err){

                console.log(err)
            }else{

                console.log("succes writing route template")
            }



        })
        
        }

        
    )
    .catch(err=>{

        console.log(err)
    })




}


module.exports = {createRoute} ;