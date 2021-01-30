"use strict";
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define(
    "Album",
    {
      albumName: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      numberOfPhotos: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      numberOfViews: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      albumCreatedBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  Album.associate = function (models) {
    Album.belongsTo(models.User, { foreignKey: "albumCreatedBy" });
    Album.hasMany(models.Photo, { foreignKey: "albumId" });
  };
  return Album;
};
