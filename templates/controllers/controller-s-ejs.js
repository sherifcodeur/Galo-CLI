const pluralize = require('pluralize')

// template for mongoose and ejs view engine

const renderControllerTemplatesejs = (modelName)=>{


    let modelNameLower = modelName.toLowerCase();
    let modelNameLowerPlural = pluralize(modelNameLower);

    let controllertemplate = `


    we render for sequelize


    for ejs

    with pagination type == ?
   
    `
    
    
    return controllertemplate ;



}


module.exports = {renderControllerTemplatesejs}