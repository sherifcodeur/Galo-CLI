# Galo-CLI

a CLI to help in our NODEjs Express Projects 

Galo has 3 commands :

* model : creates a model with its schema 

* server : create the nodejs express server file 

* controller : creates a controller for your model



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




## command server

-usage : **galo server filename typeofdb**

two types of databases : **mongoose** or **sequelize**

example of command : `galo server server mongoose`
