import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../../config";

export const Comment = sequelizeInstance.define(
  "Comment",
  {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    }
  },
  {
    tableName: "Comments",
  },
);
