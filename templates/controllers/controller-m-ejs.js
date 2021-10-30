const pluralize = require('pluralize')

// template for mongoose and ejs view engine

const renderControllerTemplatemejs = (modelName)=>{


    let modelNameLower = modelName.toLowerCase();
    let modelNameLowerPlural = pluralize(modelNameLower);

    let controllertemplate = `


    we render for mongoose 


    for api with ejs rendering

    with pagination type == ?
   
    `
    
    
    return controllertemplate ;



}


module.exports = {renderControllerTemplatemejs}