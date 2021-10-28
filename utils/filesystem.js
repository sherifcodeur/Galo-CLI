
const fs = require('fs')
const path = require('path')

// create a directory at the root level of the app
const createDirectory = (nameOfDirectory) => {

    return new Promise((resolve, reject) => {

        // we check if we can access the directory(if it exists)
        fs.access(nameOfDirectory, (error) => {

            // it doesn't exist we create it
            if (error) {
                fs.mkdir(nameOfDirectory, (err) => {

                    if (err) {

                        reject(Error("error1"))

                    } else {

                        resolve("the wanted directory has been created")
                    }

                })

            } else {

                resolve("the directory already exist")
            }
        })

    })


}

// create a file in a directory or directly in the root if not specified the directory
const createFile = (nameOfFile, nameOfDirectory = null) => {



    return new Promise((resolve, reject) => {



        // we ask for a directory
        if (nameOfDirectory) {

            // on cree dabord le directory
            createDirectory(nameOfDirectory).then(res => {


                let path = `${nameOfDirectory}/${nameOfFile}`
                fs.appendFile(path, '', (err) => {
                    if (err) {

                        reject(err)

                    } else {

                        resolve("added file")
                    }

                })


            }).catch(err => console.log(err))


        // we don't need a directory
        } else {

            let path = `${nameOfFile}`

            fs.appendFile(path, '', (err) => {

                if (err) {

                    reject(err)

                } else {

                    resolve("added file")
                }

            })


        }

    })
}






module.exports = {createDirectory,createFile}