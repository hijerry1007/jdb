const mysql = require("mysql");
const dbConfig = require("./config/dbConfig");
const baseDao = require("./baseDao");

const databasePools = {
    myProjectDB: new baseDao(mysql.createPool(dbConfig.myProjectDB))
}

module.exports.databasePools = databasePools;