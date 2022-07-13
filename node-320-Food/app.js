/**
 * express generator ES6+ template
 * @edit : callor@callor.com
 * @since : 2020-12-10
 * @see : nodejs + express 프로젝트에서 ES6+ 문법을 사용하기 위한 template
 */
import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
// import {변수들} from "파일"
// 다수의 변수(또는 함수)가 export 된경우
// 필요한 변수(또는 함수)만 import 할때
// 이때는 반드시 export 한 변수(또는 함수)와
// 같은 이름을 사용해야 한다
import { sequelize } from "./models/index.js";

// db sync : model 설정값에 따라 테이블 생성하기
// force : true 로 설정을 하면 project restart 될때
//     table을 DROP 하고 다시 CREATE 한다
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB 연결 성공");
  })
  .catch((err) => {
    console.error("오류발생 : :", err);
  });

import foodRouter from "./routes/food.js";
import usersRouter from "./routes/users.js";

const app = express();

// Disable the fingerprinting of this web technology. 경고
app.disable("x-powered-by");

// view engine setup
app.set("views", path.join("./views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join("./client/build")));

app.use("/food", foodRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
