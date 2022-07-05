// Nodejs, Express Project 의 Web Framwork
import express from "express";
import { bucket_model } from "../config/mongoConfig.js";

/*
import 된 도구를 사용하는 방법 2가지

express.Router 함수(또는 객체)를 router 라는 이름으로 사용하겠다
const router = express.Router

express.Router() 함수를 실행하여 return 된 결과를 router 변수에 담아라
const router = express.Router()
*/

const router = express.Router();

// req : 요청한 데이터가 담겨서 전달
// res : 응답할때 데이터를 담아서 전달
router.get("/", (req, res, next) => {
  const query = req.query.name;
  //   res.send("나에게 전달된 값 : " + query);
  res.json({ name: query });
});

// localhost:3000/bucket 주소로 POST 데이터가 전송되어 오면
router.post("/", (req, res) => {
  const body = req.body;
  console.table(body);
  // bucket_model 에 설정된 사항을 참조하여
  // req.body 에 담겨서 전달된 데이터를 INSERT 수행하라
  bucket_model.create(body).then(() => res.send("OK"));
});

router.get("/list", (req, res) => {
  // bucket_model 에 설정된 사항을 참조하여
  // 모든( {} ) 데이터를 selectAll(find()) 하고
  // 결과를 result 변수에 받고
  // result 변수에 받은 데이터를 JSON type 으로 client 에게 보내라
  bucket_model.find({}).then((result) => res.json(result));
});

export default router;
