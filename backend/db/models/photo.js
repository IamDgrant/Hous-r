'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    name: DataTypes.STRING(50),
    imgUrl: DataTypes.STRING,
    location: DataTypes.TEXT,
    description: DataTypes.TEXT,
    adderId: DataTypes.INTEGER
  }, {});
  Photo.associate = function(models) {
    const columnMapping = {
      through: "Photo_Album",
      otherKey: "photoId",
      foreignKey: "albumId",
    }

    Photo.belongsToMany(models.Album, columnMapping);
  };
  return Photo;
};