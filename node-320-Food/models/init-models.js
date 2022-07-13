import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tbl_food from "./tbl_food.js";

export default function initModels(sequelize) {
  const tbl_food = _tbl_food.init(sequelize, DataTypes);

  return {
    tbl_food,
  };
}
