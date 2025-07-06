import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../../config";

export const User = sequelizeInstance.define(
  "User",
  {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Users",
  },
);
