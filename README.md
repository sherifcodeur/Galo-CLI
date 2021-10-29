# Galo-CLI
a CLI to help in our NODEjs Express Projects 



## model command - usage : galo model ModelName typeofdatabase fieldsforschema

you have two choices for your database : mongoose or sequelize

- mongoose which is for mongodb databases

- sequelize for mysql and postgresql databases


### for mongoose : 

the fields for the schema has to be entered in the form : nameoffield-typeoffield-requiredfield

example of command: galo model User mongoose firstName-string-true email-string-true age-number-false
