
const renderServerTemplate = (typedb) =>{

  let dbtext = '' ;
  let listenport = '';
  let connect = '';

   if (typedb == "mongoose"){

      dbtext = "const dbconnect = require('./database/connection');"
      listenport = ` // app listens on the selected Port
      app.listen(PORT, () => {
        console.log("Server listening ")
      })`;
      connect = `    // connect to the database
      dbconnect;`
   }

   if(typedb =="sequelize"){

    dbtext = `    // db with sequelize 
    const db = require('./models');`

    listenport = ` // app listens on the selected Port
    db.sequelize.sync().then(()=>{

        app.listen(PORT, () => {
          console.log("Server listening ")
        })

    })`
    

   }

    let servertemplate = `
    // importing dependencies
    const express = require('express');
    const dotenv = require('dotenv').config();
    

    ${dbtext}
    
    //importing routes - example company routes -
    //const companyRoutes = require('./routes/companyRoutes');
    
    // PORT defined in the env file
    const PORT = process.env.PORT || 3000;
    
    
    // initializing express application
    const app = express();

    // if you want to use ejs view engine uncomment but install : npm i ejs
    //app.set('view engine','ejs')
    
  ${connect}
    
    
    
    // Request payload middleware
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    
    
    // Handle custom routes - add the custom routes
    // app.use('/api/v1/user', require('./routes/userRoutes'))
    //app.use('/api/companies',companyRoutes);
    
    
    // checks if server is working
    // app.get('/', (req, res, next) => {
    //   res.send('Hello from my Express server v2!')
    // })
    

   ${listenport}
    `

    return servertemplate;

}


module.exports = {renderServerTemplate};