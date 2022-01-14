const sqlstring = require("sqlstring");

function baseDao(datasource) {
    this.datasource = datasource;
}

baseDao.prototype.query = async function (sql, values) {
    return new Promise((resolve, reject) => {
        this.datasource.getConnection(function (err, client) {
            if (err) {
                return reject(err);
            } else {
                client.query(sql, values, function (error, results, fields) {
                    client.release();
                    if (error) {
                        return reject(error);
                    } else {
                        return resolve(results);
                    }
                });
            }
        });
    });
}

module.exports = baseDao;