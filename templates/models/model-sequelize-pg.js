
const renderModelTemplateSequelizepg = (modelName , fields=null) =>{

    let modelNameLower = modelName.toLowerCase();

    let modeltemplate = `
    // ${modelName} Model for pg

    // attention code vide utiliser plutot sequelize CLI ->create model and migrations for the model
    
    module.exports =  ${modelName} ;`

    return modeltemplate;

}


module.exports = {renderModelTemplateSequelizepg};