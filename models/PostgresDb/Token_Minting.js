const { DataTypes } = require("sequelize");
const { sequelize } = require("../../Config/postgres");

const TokenMinting = sequelize.define("TokenMinting", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'users', 
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  toAddress: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  tokenURI: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tokenId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  minted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: 'TokenMinting',
  timestamps: true,
});

module.exports = TokenMinting;
