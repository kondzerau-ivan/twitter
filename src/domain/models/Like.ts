import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../../config";

export const Like = sequelizeInstance.define(
  "Like",
  {
    userId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    targetId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    targetType: {
      type: DataTypes.ENUM("post", "comment"),
      allowNull: false,
    }
  },
  {
    tableName: "Likes",
  },
);
