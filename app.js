var express = require('express');
const sequelize = require("sequelize");

let dbConfig = {
    HOST: "127.0.0.1",
    USER: "root",
    PASSWORD: "abc",
    DB: "testdb",
    dialect: "mysql", 
    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
    }
}

const Sequelize = new sequelize(dbConfig.DB, dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operationsAliases: false,
        pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
        }
    })

    // Schema definition
    const Tutorial = Sequelize.define("Tutorial", {
        title: {
        type: sequelize.STRING
        },
        description: {
        type: sequelize.STRING
        },
        published: {
        type: sequelize.BOOLEAN
        }
        });
   
    

var app = express();

app.get('/', function (req, res) {
    // Create tutorial table
    const tutorial = {
        title: "Abc",
        description: "xxxxx",
        published: true
        };
        
    Tutorial.create(tutorial)
        .then(data => {
            res.send("Hello world" + JSON.stringify(data));
            }) .catch(err => {
            res.status(500).send ({
            Message:
            err.message || "Some errors will occur when creating a tutorial"
            });
        })
    
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});

// add a code to create a table in sql, and jab hit karungi, tab dummy item and dummy count
// url hit karte hi count update ho jaana chahiye