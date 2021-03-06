# Galo-CLI

a CLI to help in our NODEjs Express Projects 

Galo has 4 commands :

* model : creates a model with its schema 

* server : create the nodejs express server file 

* database : only for mongoose : create connection file (no need for sequelize)

* controller : creates a controller for your model

#### **HOW TO INSTALL**

1. Clone this repo on your computer
1. Go on the root folder of the repo and do `npm install -g`


## BEFORE USING

Depending on the database you want to use you might need to do some initializations :

#### Mongoose : 

- Make the package.json with `npm init`
- Install some important libraries `npm install express dotenv pluralize method-override`
- install mongoose with `npm install mongoose`
- if needed install ejs : `npm i ejs`
- Create the server file : _see the server command_
- Create the database connection file _see the database command_
- create the special files : gitignore readme and env files

- Now you can create models controllers and other files 


#### Sequelize : 

- Make the package.json with `npm init`
- Install some important libraries `npm install express dotenv pluralize method-override`
- install sequelize with `npm install sequelize`
- if needed install ejs : `npm i ejs`
- you need to initialize sequelize : `npx sequelize-cli init`
- Create the server file : _see the server command_

- create the special files : gitignore readme and env files

- Now you can create models controllers and other files 




## command: model 

- usage : **galo model ModelName typeofdatabase fieldsforschema**

you have two choices for your database : **mongoose** or **sequelize**

- mongoose which is for mongodb databases

- sequelize an ORM for mysql and postgresql databases


### for mongoose : 

the fields for the schema has to be entered in the form : nameoffield-typeoffield-requiredfield

**type of fields possible in mongoose** :
- string
- number
- date
- buffer
- boolean
- mixed
- ObjectId
- Array
- Decimal128
- Map
- Schema


example of command: `galo model User mongoose firstName-string-true email-string-true age-number-false`

after that you need to add informations to the model fields **if you intend to use the crud generator**:


- generator:"i c s e",
- fieldType: "text"

for the generator you have 4 possibilities : i for index , c for controller , s for store , e for edit

for the fieldType : you have several choices : text , textarea , password , email , select


### for sequelize 

the fields for the schema has to be entered in the form : nameoffield:typeoffield

example of command : `galo model User sequelize firstName-String email-String`




## command: server

-usage : **galo server filename typeofdb**

two types of databases : **mongoose** or **sequelize**

example of command : `galo server server mongoose`


## command: database

To use only with mongoose 

usage: **galo database filename**

example : `galo database connection`

it will create the connection file for mongoose 

for sequelize it s already done when you initialize with `npx sequelize-cli init` (it creates all folders)

## command: controller

usage: **galo controller modelName typeofdatabase typeofcrud paginationType**

* modelName : the name of the model for which you want to create a controller CRUD , it will also name the controller automatically :modelNameController

* typeofdatabase : two choices : mongoose | sequelize

* typeofcrud : two choices , in fact it is the rendering we want : api or ejs

* paginationType : three choices : none | cursor | skip  this will be used in the index (show all and search)

example : `galo controller User mongoose api skip`

#### mongoose 

* for pure api project 

* for rendering with ejs rendering

#### sequelize 

* for pure api project 

* for rendering with ejs rendering


## command: route

usage: **galo route modelName typeofcrud**

* modelName: name of the model for which you create the routes

* typeofcrud: type of CRUD api or ejs

example :`galo route User api`

## command: Auth

usage **galo auth typeofdb**

create an auth with login register admin Panel

* typeofdb: type of CRUD mongoose or sequelize

**for the moment creates only for mongoose project with ejs**

example : `galo auth mongoose`

install the following libraries

`npm install validator bcrypt`

