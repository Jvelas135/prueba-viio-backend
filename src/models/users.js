import { DataTypes } from "sequelize";
import sequelize from "../db/conection.js";
/**
 * @openapi
 * components:
 *   schemas:
 *     usuarios:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "string"
 *         phone:
 *           type: string
 *           example: "string"
 *         email:
 *           type: string
 *           example: "string@gmail.com"
 *         password:
 *           type: string
 *           example: "12345"
 *         state:
 *            type: integer
 *            example: 1
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: "string@gmail.com"
 *         password:
 *           type: string
 *           example: "12345"
 */
export const Users = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.INTEGER,
  },
  creation_date: {
    type: DataTypes.DATE,
  }
},
{
    timestamps: false,
}
);

