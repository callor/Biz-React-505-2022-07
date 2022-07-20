import express from "express";
const router = express.Router();

// http://localhost:3000/users/ 로 요청이 들어오면 실행되는 함수
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

export default router;
