const {camelCase} = require('../../utils/helpers')

const renderModelTemplateMongoose = (modelName , fields=null) =>{

    let modelNameLower = modelName.toLowerCase();

    // we prepare the fields if they exists
    let populatedSchema = '';
    if(fields.length > 0){

        fields.forEach(element => {

            // on doit dabord casser element avec les - 

            let newarr = element.split("-");

            let nameoffield = newarr[0];

            let typeoffield = camelCase(newarr[1])

            let required = '';

            if(newarr[2]=== "true"){

                required = "required:[true,'required field'] ,"
            }


            let populate = `
            
            ${nameoffield} : {
                type:${typeoffield},
                ${required}       
            },
            
            `

            populatedSchema += populate
        });

    } else{

        populatedSchema = `
        
        // example of field - replace with real values
        nameoffield : {
            type:String,
            required:[true,'required field'],       
        },
        
        `
        
        
       
    }



    let modeltemplate = `
    // ${modelName} Model


    //importing external dependencies
    const mongoose = require('mongoose');

    //for cursor pagination
    //const MongoPaging = require('mongo-cursor-pagination');

    // for using unique validator (example unique email)
    //const uniqueValidator = require('mongoose-unique-validator');



    // creating ${modelName} Schema
    const Schema = mongoose.Schema;
    const ${modelNameLower}Schema = new Schema({

       ${populatedSchema}
    
    },     
        // Make Mongoose use Unix time (seconds since Jan 1, 1970)
        { timestamps: true }
    );


    // this will add cursor paginate function.
    // ${modelNameLower}Schema.plugin(MongoPaging.mongoosePlugin);

    // for unique validation such as email
    // ${modelNameLower}Schema.plugin(uniqueValidator);



    // creating model ${modelName} based on the ${modelNameLower} schema
    const ${modelName} = mongoose.model('${modelNameLower}',${modelNameLower}Schema);



    //exporting the model ${modelName}
    module.exports =  ${modelName} ;`

    return modeltemplate;

}




module.exports = {renderModelTemplateMongoose};