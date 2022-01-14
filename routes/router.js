const userRouter = require("./userRouter");
const apis = require("./apiRouter");
const { authenticatedJWT } = require('../utils/middleware');


module.exports = (app) => {
  app.use('/user', userRouter);

  //以下為需要jwt token驗證的api
  app.use(authenticatedJWT);
  app.use('/apis', apis);
};