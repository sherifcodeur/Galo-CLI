
const renderModelTemplateSequelizepg = (modelName , fields=null) =>{

    let modelNameLower = modelName.toLowerCase();

    let modeltemplate = `
    // ${modelName} Model


    
    module.exports =  ${modelName} ;`

    return modeltemplate;

}


module.exports = {renderModelTemplateSequelizepg};