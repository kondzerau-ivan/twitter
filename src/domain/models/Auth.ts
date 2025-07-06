import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../../config";

export const Auth = sequelizeInstance.define(
  "Auth",
  {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    extra: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Соль для секрета",
    }
  },
  {
    tableName: "Auths",
  },
);
