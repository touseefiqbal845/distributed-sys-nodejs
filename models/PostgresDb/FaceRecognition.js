const { DataTypes } = require("sequelize");
const { sequelize } = require("../../Config/postgres");

const FaceRecognition = sequelize.define(
  "FaceRecognition",
 {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: { type: DataTypes.UUID, allowNull: false },
    point_id: { type: DataTypes.STRING, defaultValue: "" },
    status: { type: DataTypes.STRING, defaultValue: "" },
  },
  {
    timestamps: true,
  }
);

module.exports = FaceRecognition;
