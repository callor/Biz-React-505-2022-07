import express from "express";
const router = express.Router();

import { food_model } from "../config/mongoConfig.js";

// POST localhost:3000/food/insert
router.post("/insert", (req, res) => {
  console.log(req.body);
  food_model.create(req.body);

  res.json({ OK: "OK" });
});

export default router;
