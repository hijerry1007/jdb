const bcrypt = require("bcryptjs");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const badReq = require("../utils/badReq.json"); 
const { successRes, errorRes } = require("../utils/responseHandler");

const userController = {
    /*signUpPage: (req, res) => {
        return res.render('signup')
    },*/
    signup: async (req, res) => {

        //業務邏輯

        //創建使用者
        const result = await User.create({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null)
        });
        const resData = JSON.stringify({code: 0});
        successRes(res, resData);
        return;
    },
    login: async (req, res, next) => {
        const {username, password} = req.body;
        const user = await User.findByName(username);
        //查無用戶
        if(!user) {
            errorRes(res, badReq.NO_USER, 404);
            return;
        }

        //密碼錯誤
        if(!bcrypt.compareSync(password, user.password)) {
            errorRes(res, badReq.PASSWORD_ERROR, 403);
            return;
        }

        const payload = {id: user.id, username, password};
        const jwt_token = jwt.sign(payload, process.env["JWT_SECRET"], { expiresIn: 60 * 60 });
        const resData = { token: jwt_token};
        successRes(res, resData);
        return;
    }
};


module.exports = userController