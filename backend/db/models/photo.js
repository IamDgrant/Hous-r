"use strict";
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define(
    "Photo",
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      adderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
    {}
  );
  Photo.associate = function (models) {
    const columnMapping = {
      through: "Photo_Tags",
      otherKey: "tagId",
      foreignKey: "photoId",
    };

    Photo.belongsToMany(models.Tag, columnMapping);
    Photo.hasOne(models.User, { foreignKey: "addedId" });
    Photo.hasOne(models.Album, { foreignKey: "albumId" });
    Photo.hasMany(models.Comment, { foreignKey: "photoId" });
  };
  return Photo;
};
