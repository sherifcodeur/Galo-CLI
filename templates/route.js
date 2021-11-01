const renderRouteTemplate = (modelName,typeofcrud)=>{



    let modelNameLower = modelName.toLowerCase();


    let template =``

    if(typeofcrud == "api"){

        template = `// all routes for ${modelName} Model
        const express = require('express');
        const router = express.Router();
        const ${modelNameLower}Controller = require('../controllers/${modelName}Controller');
        
        
        
        
        router.get('/', ${modelNameLower}Controller.${modelNameLower}_get)
        
        router.post('/', ${modelNameLower}Controller.${modelNameLower}_post)
        
        router.get('/show/:id',${modelNameLower}Controller.${modelNameLower}_show)
        
        router.put('/update/:id',${modelNameLower}Controller.${modelNameLower}_put)
        
        router.delete('/delete/:id',${modelNameLower}Controller.${modelNameLower}_delete)
        
        router.get('/search',${modelNameLower}Controller.${modelNameLower}_search)
        
        module.exports = router ; `
            
            
            

    }


    if(typeofcrud =="ejs"){

        template = `// all routes for ${modelName} Model
        const express = require('express');
        const router = express.Router();
        const ${modelNameLower}Controller = require('../controllers/${modelName}Controller');
        
        
        
        
        router.get('/', ${modelNameLower}Controller.index)

        router.get('/create', ${modelNameLower}Controller.create)
        
        router.post('/', ${modelNameLower}Controller.store)
        
        router.get('/show/:id',${modelNameLower}Controller.show)

        router.get('/edit/:id',${modelNameLower}Controller.edit)
        
        router.put('/update/:id',${modelNameLower}Controller.update)
        
        router.delete('/delete/:id',${modelNameLower}Controller.destroy)
        
        router.get('/search',${modelNameLower}Controller.search)
        
        module.exports = router ; `
            
            
            
        

    }


   return template;



}


module.exports = {renderRouteTemplate}