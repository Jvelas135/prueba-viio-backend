import { Sequelize } from "sequelize";

const sequelize = new Sequelize("viio", "jorgedev", "12345", {
    host: "34.42.246.77",
    port: 3306,
    dialect: "mysql"
  });

export default sequelize;