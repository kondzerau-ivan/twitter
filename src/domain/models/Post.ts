import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../../config";

export const Post = sequelizeInstance.define(
  "Post",
  {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    }
  },
  {
    tableName: "Posts",
  },
);
