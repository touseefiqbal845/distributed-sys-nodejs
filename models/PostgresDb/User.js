const { DataTypes } = require("sequelize");
const { sequelize } = require("../../Config/postgres");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.BLOB, 
    allowNull: false,
  },
  salt: {
    type: DataTypes.BLOB,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
  },
  verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  verificationCode: {
    type: DataTypes.STRING,
  },
  verificationCodeExpires: {
    type: DataTypes.DATE,
  },
}, {
  tableName: "users",
  timestamps: true,
});

module.exports = User;
