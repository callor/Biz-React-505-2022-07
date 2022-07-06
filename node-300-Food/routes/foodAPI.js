import express from "express";
const router = express.Router();

router.post("/insert", (req, res) => {
  console.log(req.body);
});

export default router;
