const pluralize = require('pluralize')

// template for mongoose and ejs view engine

const renderControllerTemplatemejs = (modelName)=>{


    let modelNameLower = modelName.toLowerCase();
    let modelNameLowerPlurar = modelNameLower+'s';
    let dollar = "$"
    let backtick = "`"

    let controllertemplate = `
    // ${modelName} Controller
    // we import the model so we can interact with the database
    const mongoose = require('mongoose');
    
    // importing the ${modelName} model
    const ${modelName} = require('../models/${modelName}.js');
    

    // change it with the path to your admin urls
    let path = '/admin'
    


    // shows all ${modelNameLower}
    const index = async (req, res) => {


        /// simplest way 
    
        // ${modelName}.find().then((result) => {
    
        //     //console.log(result);
        //     res.render('./${modelNameLowerPlurar}/index', {
    
        //         all${modelNameLowerPlurar}: result
        //     });
        // }).catch(err => console.log(err));


        ///////////////




        // pagination with skip limit method no need of plugins--------------------
        // try {
    
        //     // the page size , how many rows we want
        //     let limit = parseInt(req.query.limit);
        //     //console.log("la limit",limit)
    
        //     //how many rows to skip before showing
        //     let offset = parseInt(req.query.offset);
        //     //console.log("offset",offset)
    
        //     if(!offset){           
        //         offset = 0  }
    
        //     if(!limit){
        //         limit = 5
        //     }
    
        //     const all${modelNameLowerPlurar} = await ${modelName}.find()
        //                                     .skip(offset)
        //                                     .limit(limit)
        //     const ${modelNameLowerPlurar}Count= await ${modelName}.count();
    
        //     const totalPages = Math.ceil(${modelNameLowerPlurar}Count/limit)
        //     const currentPage = Math.ceil(offset / limit)+1
    

        //     res.render('./${modelNameLowerPlurar}/index', {
        
        //         all${modelNameLowerPlurar}: all${modelNameLowerPlurar},
        //         paging:{
        //            total:${modelNameLowerPlurar}Count,
        //            page:currentPage,
        //            pages:totalPages
        //        }

        //    });    

        // } catch (error) {
        //     console.log("error",error)
        //     res.status(500).send({data:null})        
        // }
    
        // // end of pagination with skip limit--------------------------


    
    
    
    }
    
    
    // sends to a form to create a ${modelNameLower}
    const create = (req, res) => {
    
        res.render('./${modelNameLowerPlurar}/create');
    
    }
    
    // receive the req from the form to create a ${modelNameLower} in the db
    const store = (req, res) => {
    
        // console.log(req.body.name);
        let new${modelName} = new ${modelName}(req.body);
    
        new${modelName}.save().then(res.redirect(${backtick}${dollar}{path}/${modelNameLowerPlurar}${backtick})).catch(err => console.log(err.message));
    
    
    
    
    
    }
    
    // show one ${modelNameLower}
    const show = (req, res) => {
    
        let theid = req.params.id;
    
        ${modelName}.findById(theid)
            .then(result => {
    
                res.render('./${modelNameLowerPlurar}/show', {
                    the${modelNameLower}: result
                });
    
            })
            .catch(err => console.log(err));
    
    }
    
    // show the edit form with old values 
    const edit = (req, res) => {
    
        let theid = req.params.id;
    
        ${modelName}.findById(theid)
            .then(result => {
    
                res.render('./${modelNameLowerPlurar}/edit', {
                    the${modelNameLower}: result
                });
    
            })
            .catch(err => console.log(err));
    
    }
    
    // take back the values from the edit form and update them in the db
    const update = (req, res) => {
    
        let theid = req.params.id;
    
        //console.log(req.body);
    
        ${modelName}.findByIdAndUpdate(theid, req.body).then(result => {
    
    
            res.redirect(${backtick}${dollar}{path}/${modelNameLowerPlurar}${backtick});
        }).catch(err => console.log(err));
    
    
    
    }
    
    
    // delete the ${modelNameLower} form the database 
    const destroy = (req, res) => {
    
        let theid = req.params.id;
    
        ${modelName}.findByIdAndDelete(theid).then(result => {
    
            res.redirect(${backtick}${dollar}{path}/${modelNameLowerPlurar}${backtick});
        }).catch(err => console.log(err));
    
    
    }
    
    
    module.exports = {
    
        index,
        create,
        store,
        show,
        edit,
        update,
        destroy,
    
    }
    `

    return controllertemplate;




}


module.exports = {renderControllerTemplatemejs}