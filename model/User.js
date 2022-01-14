const myProjectDB = require("../db/dbHelper").databasePools.myProjectDB;

module.exports.findByName = async function (username) {
    const sql = "SELECT * from adm_user WHERE name = ?";
    const [result] = await myProjectDB.query(sql, [username]);
    return result;
}

module.exports.findById = async function (id) {
    const sql = "SELECT * from adm_user WHERE id = ?";
    const [result] = await myProjectDB.query(sql, [id]);
    return result;
}

module.exports.create = async function ({username, password}) {
    const sql = "INSERT INTO adm_user (`role_id`, `name`, `password`) VALUES (?,?,?)";
    const result = await myProjectDB.query(sql, ["1", username, password]);
    return result;
}