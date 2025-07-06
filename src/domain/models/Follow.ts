import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../../config";

export const Follow = sequelizeInstance.define(
  "Follow",
  {
    followerId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    followedId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    }
  },
  {
    tableName: "Follows",
  },
);
