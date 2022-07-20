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

// routes/index.js 파일을 import 하여 indexRouter 객체로 생성하라
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

// nodeJS express WAS
const app = express();

// Disable the fingerprinting of this web technology. 경고
app.disable("x-powered-by");

// view engine setup
app.set("views", path.join("./views"));
app.set("view engine", "pug");

/*
 미들웨어, 
  web browser 에서 request(요청)을 하면
  nodejs 서버로 전송되면서 중간에
  여러가지 설정, 여러가지 작동되는 요소들을 play 하는 것
 */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join("./public")));

// http://localhost:3000/ 로 요청이 들어오면
app.use("/", indexRouter);

// http://localhost:3000/uses 로 요청이 들어오면
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
