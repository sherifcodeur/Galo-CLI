# Galo-CLI

a CLI to help in our NODEjs Express Projects 

Galo has 3 commands :

* model : creates a model with its schema 

* server : create the nodejs express server file 

* controller : creates a controller for your model


## BEFORE USING

Depending on the database you want to use you might need to do some initializations :

#### Mongoose : 

- Make the package.json with `npm init`
- Install some important libraries `npm install express dotenv`
- install mongoose with `npm install mongoose`
- Create the server file : _see the server command_
- Create the database connection file
- create the special files : gitignore readme and env files

- Now you can create models controllers and other files 


#### Sequelize : 

- Make the package.json with `npm init`
- Install some important libraries `npm install express dotenv`
- install sequelize with `npm install sequelize`
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

example of command: `galo model User mongoose firstName-string-true email-string-true age-number-false`

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

for sequelize it s already done when you initialize with `npx sequelize-cli init`