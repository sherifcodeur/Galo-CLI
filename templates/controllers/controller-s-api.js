const pluralize = require('pluralize')

// template for mongoose and ejs view engine

const renderControllerTemplatesapi = (modelName)=>{


    let modelNameLower = modelName.toLowerCase();
    let modelNameLowerPlural = pluralize(modelNameLower);

    let controllertemplate = `


    we render for sequelize


    for api 

    with pagination type == ?
   
    `
    
    
    return controllertemplate ;



}


module.exports = {renderControllerTemplatesapi}