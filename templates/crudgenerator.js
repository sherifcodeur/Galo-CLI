



const renderCrudGeneratorTemplate = (modelName)=>{

    let backtick = "`"
    let dollar = "$"


    let generatortemplate = `

    // pour generer le crud faire:    node .\crudgenerators\\${modelName}CrudGenerator.js
        on a un crud generator pour ${modelName}

        const ${modelName} = require('../models/${modelName}')

const fs = require('fs')

const pluralize = require('pluralize')

const ModelName = "${modelName}"
const lowerModelName = ModelName.toLowerCase()
const lowerModelNameplural = pluralize(lowerModelName)


const pak = Object.values(${modelName}.schema.paths) ;

let before = ${backtick}
<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@3.1/dist/css/adminlte.min.css">
</head>
<body>
 
${backtick}


const beginformcard = function(formtag){

    return  ${backtick}
    <div class="card card-primary">
            <div class="card-header">
                    <h3 class="card-title">Quick Example</h3>
            </div>

            ${dollar}{formtag}
            <div class="card-body">

            ${backtick}

}

let endformcard =  ${backtick}

                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                </form>

                ${backtick}



let after = ${backtick}

        </div>
        </body>
        </html>
        
        ${backtick}



// *************index creation ***************
//we create table th
function createTableth(){
    let tableths = ${backtick}<tr>${backtick}        
        
    pak.forEach(element=>{
        
        if(element.options.generator){
        
            if(element.options.generator.includes("i")){
        
        
               tableths += ${backtick}<th rowspan="1" colspan="1">${dollar}{element.path}</th>${backtick}      
                       }
        
                       }
                })
                tableths += ${backtick}</tr>${backtick}
                return tableths
        
    }


// we create the td for the index
function createTabletd(){

        let tabletds = ${backtick}${backtick}

        tabletds += ${backtick}<% all${dollar}{lowerModelNameplural}.forEach(${dollar}{lowerModelName}=>{ %>${backtick}

        tabletds += '<tr>'

        pak.forEach(element=>{
                
                console.log("element",element)

                if(element.options.generator){

                        if(element.options.generator.includes("i")){


                                tabletds +=${backtick}<td><%= ${dollar}{lowerModelName}.${dollar}{element.path} %></td>${backtick}      
                        }

                }
        })

                        

        tabletds += ${backtick}<td><a href="/admin/${dollar}{lowerModelNameplural}/show/<%= ${dollar}{lowerModelName}.id %>"  type="button" class="btn btn-xs btn-block bg-gradient-primary">Show</a></td><td><a href="/admin/${dollar}{lowerModelNameplural}/edit/<%= ${dollar}{lowerModelName}.id %>"  type="button" class="btn btn-xs btn-block bg-gradient-primary">Edit</a></td><td><button onclick="destroy('<%= ${dollar}{lowerModelName}.id %>')" type="button" class="btn btn-xs btn-block bg-gradient-danger">Delete</button></td>${backtick}

        tabletds += ${backtick}</tr>${backtick}

        tabletds += ${backtick}<% }) %>${backtick}

        

    return tabletds

}

// we create index table with pagination and buttons show edit and delete
function createIndexTable(){

        let indexpage = ${backtick}${backtick}
        indexpage += before

        indexpage += ${backtick}<div class="card">
        <div class="card-header">
          <h3 class="card-title">DataTable with minimal features &amp; hover style</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4"><div class="row"><div class="col-sm-12 col-md-6"></div><div class="col-sm-12 col-md-6"></div></div><div class="row"><div class="col-sm-12"><table id="example2" class="table table-bordered table-hover dataTable dtr-inline" role="grid" aria-describedby="example2_info">
            <thead>
            ${dollar}{createTableth()} </th> 
            </thead>
            <tbody>
          
            ${dollar}{createTabletd()}  
            </tbody>
            <tfoot>
            <tr>${dollar}{createTableth()}</tr>
            </tfoot>
          </table></div>
          </div>
          <div class="row">
          <div class="col-sm-12 col-md-5">
          <div class="dataTables_info" id="example2_info" role="status" aria-live="polite">Total <%= total %>${dollar}{lowerModelNameplural}</div>
          </div>
          <div class="col-sm-12 col-md-7">
          <div class="dataTables_paginate paging_simple_numbers" id="example2_paginate">


<% if (pages > 0) { %>
        <ul class="pagination">
            <% if (current == 1) { %>
                <li class="paginate_button page-item previous disabled" id="example2_previous"><a  class="page-link">First</a></li>
            <% } else { %>
                <li><a href="/admin/${dollar}{lowerModelNameplural}/1"  class="page-link">First</a></li>
            <% } %>
            <% var i = (Number(current) > 5 ? Number(current) - 4 : 1) %>
            <% if (i !== 1) { %>
                <li class="paginate_button page-item previous disabled" id="example2_previous"><a  class="page-link">...</a></li>
            <% } %>
            <% for (; i <= (Number(current) + 4) && i <= pages; i++) { %>
                <% if (i == current) { %>
                    <li class="active"><a  class="page-link"><%= i %></a></li>
                <% } else { %>
                        <li class="paginate_button page-item "><a href="/admin/${dollar}{lowerModelNameplural}/<%= i %>"  class="page-link"><%= i %></a></li>
                <% } %>
                <% if (i == Number(current) + 4 && i < pages) { %>
                        <li class="paginate_button page-item previous disabled" id="example2_previous"><a  class="page-link">...</a></li>
                <% } %>
            <% } %>
            <% if (current == pages) { %>
                <li class="paginate_button page-item next disabled" id="example2_previous"><a  class="page-link">Last</a></li>
            <% } else { %>
                <li class="paginate_button page-item next" id="example2_next"><a href="/admin/${dollar}{lowerModelNameplural}/<%= pages %>"  class="page-link">Last</a></li>
            <% } %>
        </ul>
    <% } %>

          </div>
          </div>
          </div>
          </div>
        </div>
        <!-- /.card-body -->
        </div> </div>${backtick}

        let backtik ="${backtick}"
        let dollar = "$"
        let afterindex = ${backtick}

        <script type="text/javascript">

        function destroy(id){

         console.log("clicked")

         return fetch(${dollar}{backtik}/admin/${dollar}{lowerModelNameplural}/delete/${dollar}{dollar}{id}${dollar}{backtik},{method:'DELETE'}).then(res=> {
           
          window.location.href ='/admin/${dollar}{lowerModelNameplural}'
         }).catch(err=> console.log(err))


        }

      </script>
</body>
</html>
${backtick}

indexpage += afterindex



fs.writeFile(${backtick}views/${dollar}{lowerModelNameplural}/index.ejs${backtick}, indexpage ,(err)=>{

  if(err){

      console.log(err)

  }else{

      console.log('success created index view')
  }

});

}
//***************end of index creation **************/



// ******************form creation *****************
// create the create form
function createCreateForm(){


    let theform = ${backtick}${backtick}

    theform += before
    theform += beginformcard(${backtick}<form action="/admin/${dollar}{lowerModelNameplural}" method="POST">${backtick})



           // we loop through each element of the schema
    pak.forEach(element=>{

            
            if(element.options.generator){
    
                    if(element.options.generator.includes("c")){
    
                    // console.log(element.path)
                    // console.log(element.instance)
                    // console.log(element.options.generator)
                    // console.log(element.options.required)
                     //console.log(element.options.fieldType) 
                    
                    theform += writeFormTemplate(element.path,element.options.fieldType,"create")       
    
                    }      
    
    
            }
    })
    theform += endformcard
    theform += after


   

            console.log("created views")

 

                            fs.writeFile(${backtick}views/${dollar}{lowerModelNameplural}/create.ejs${backtick}, theform ,(err)=>{

                                if(err){

                                    console.log(err)

                                }else{

                                    console.log('success created view')
                                }
                          
                    
           
    });

}




// create the edit form
function  createEditForm(){

  

        let theform = ${backtick}${backtick}

        theform += before
        theform += beginformcard(${backtick}<form action="/admin/${dollar}{lowerModelNameplural}/update/<%= the${dollar}{lowerModelName}.id %>?_method=PUT" method="POST">${backtick})



               // we loop through each element of the schema
        pak.forEach(element=>{

                // if schema field contains generator with i (index inside) we build the index
                if(element.options.generator){
        
                        if(element.options.generator.includes("e")){
        
                        // console.log(element.path)
                        // console.log(element.instance)
                        // console.log(element.options.generator)
                        // console.log(element.options.required)
                        // console.log(element.options.fieldType) 
                        
                        theform += writeFormTemplate(element.path,element.options.fieldType,"edit")       
        
                        }      
        
        
                }
        })
        theform += endformcard
        theform += after


                                fs.writeFile(${backtick}views/${dollar}{lowerModelNameplural}/edit.ejs${backtick}, theform ,(err)=>{

                                    if(err){

                                        console.log(err)

                                    }else{

                                        console.log('success created view')
                                    }
                               
                         
                
        });

       

        //return theform

}


// choose the right field form to add 
function writeFormTemplate(nameoffield,fieldType,typeofForm){

        switch (fieldType) {
                case "text":

                        return inputtextfieldtemplate(nameoffield,typeofForm)
                        
                        break;

                case "textarea":
                        return inputtextareafieldtemplate(nameoffield,typeofForm)

                        break;
                
                case "email":

                        return inputemailfieldtemplate(nameoffield,typeofForm)
                            
                        break;

                case "password":

                        return inputpasswordfieldtemplate(nameoffield,typeofForm)
                                
                        break;

        
                default:
                        break;
        }


}

// all the form fields types*********

// input text field
function inputtextfieldtemplate(nameoffield,typeofForm) {
        
        let val = ${backtick}${backtick}

        if(typeofForm == "edit"){

                val = ${backtick}value="<%= the${dollar}{lowerModelName}.${dollar}{nameoffield} %>"${backtick}
        }
        
        return ${backtick}
                        <div class="form-group">
                                <label for="${dollar}{nameoffield}">${dollar}{nameoffield}:</label>
                                <input type="text" class="form-control" id="${dollar}{nameoffield}" name="${dollar}{nameoffield}" ${dollar}{val}>
                        </div>

                        ${backtick}}




// input email field
function inputemailfieldtemplate(nameoffield,typeofForm) { 
        
        
        let val = ${backtick}${backtick}

        if(typeofForm == "edit"){

                val = ${backtick}value="<%= the${dollar}{lowerModelName}.${dollar}{nameoffield} %>"${backtick}
        }

        return ${backtick}
                        <div class="form-group">
                                <label for="${dollar}{nameoffield}">${dollar}{nameoffield}:</label>
                                <input type="email" class="form-control" id="${dollar}{nameoffield}" name="${dollar}{nameoffield}" ${dollar}{val}>
                        </div>

                        ${backtick}}






// input password field
function inputpasswordfieldtemplate(nameoffield,typeofForm) {
        
        let val = ''

        if(typeofForm == "edit"){

                val =  ${backtick}value="<%= the${dollar}{lowerModelName}.${dollar}{nameoffield} %>" ${backtick}
        }
        
        
        return  ${backtick}
                        <div class="form-group">
                                <label for="${dollar}{nameoffield}">${dollar}{nameoffield}:</label>
                                <input type="password" class="form-control" id="${dollar}{nameoffield}" name="${dollar}{nameoffield}" ${val}>
                        </div>

                        ${backtick}}









// text area field
function inputtextareafieldtemplate(nameoffield,typeofForm) { 
        
        let val = ''

        if(typeofForm == "edit"){

                val = ${backtick}<%= the${dollar}{lowerModelName}.${dollar}{nameoffield} %>${backtick}
        }
        
        
        return ${backtick}
                        <div class="form-group">
                                <label for="${dollar}{nameoffield}">${dollar}{nameoffield}</label>
                                <textarea id="${dollar}{nameoffield}" class="form-control" name="${dollar}{nameoffield}" rows="4" cols="50">${dollar}{val}</textarea>
                        </div> 

${backtick}}

// end of all field forms*************

//*******************end of form creation **********/


function generateParagraphs(){
    let paraphs =''
    // we loop through each element of the schema
    pak.forEach(element=>{

            

            // if schema field contains generator with i (index inside) we build the index
            if(element.options.generator){
    
                    if(element.options.generator.includes("s")){
    
                    let nameoffield = element.path

                    paraphs += ${backtick}<p> <%= the${dollar}{lowerModelName}.${dollar}{nameoffield} %> </p>${backtick}
    
                    }      
    
    
            }

            
    })

    return paraphs
}



function createShowPage(){

    let page = ''

    page += before

    page += ${backtick}<div class="card">
    <div class="card-header">
      <h3 class="card-title">DataTable with minimal features &amp; hover style</h3>
    </div>
    <!-- /.card-header -->
    <div class="card-body">

    ${dollar}{generateParagraphs()}



    <!-- /.card-body -->
    </div>
    </div>${backtick}


    page += after


    
    fs.writeFile(${backtick}views/${dollar}{lowerModelNameplural}/show.ejs${backtick}, page ,(err)=>{

            if(err){

                console.log(err)

            }else{

                console.log('success created show view')
            }
 
});

}
// end of show page creation ***************************


// we create the crud with All the views
 async function createCrud (){


        //on doit creer les directory
        await  createDirectory('views').then(console.log("created views")).catch(err=>console.log("error in creating views"))
        await  createDirectory(${backtick}views/${dollar}{lowerModelNameplural}${backtick}).then(console.log("created views folder artists")).catch(err=>console.log("error in creating views"))


        createIndexTable()



        createCreateForm()



        createShowPage()



        createEditForm()

     

}

// create a directory at the root level of the app if it doesnt't exist
function createDirectory(nameOfDirectory){

        return new Promise((resolve, reject) => {
    
            // we check if we can access the directory(if it exists)
            fs.access(nameOfDirectory, (error) => {
    
                // it doesn't exist we create it
                if (error) {
                    fs.mkdir(nameOfDirectory, (err) => {
    
                        if (err) {
    
                            reject(Error("error1"))
    
                        } else {
    
                            resolve("the controllers directory has been created")
                        }
    
                    })
    
                } else {
    
                    resolve("the controller already exist")
                }
            })
    
        })   
}


createCrud()

    `
    
    
    return generatortemplate ;



}




module.exports = {renderCrudGeneratorTemplate}