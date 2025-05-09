const { DataTypes } = require("sequelize");
const { sequelize } = require("../../Config/postgres");

const DocsRecognition = sequelize.define(
  "DocsRecognition",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: { type: DataTypes.UUID, allowNull: false },
    documents: { type: DataTypes.JSONB, defaultValue: [] },
    status: { type: DataTypes.STRING, defaultValue: "" },
  },
  {
    timestamps: true,
  }
);

module.exports = DocsRecognition;
