'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    albumName: DataTypes.STRING(30),
    numberOfPhotos: DataTypes.INTEGER,
    numberOfViews: DataTypes.INTEGER,
    albumCreatedBy: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    const columnMapping = {
      through: "Photo_Album",
      otherKey: "photoId",
      foreignKey: "",
    }
  };
  return Album;
};