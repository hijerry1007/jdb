const config = {
    //mysql
    myProjectDB: {
        host: "127.0.0.1",
        port: 3306,
        database: "myProject",
        connectionLimit : 10,
        user: "root",
        password: "123456",
        charset: 'utf8mb4',
        dateStrings: true,
        multipleStatements: true
    }
}

module.exports = config;