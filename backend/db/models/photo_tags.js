"use strict";
module.exports = (sequelize, DataTypes) => {
  const Photo_Tags = sequelize.define(
    "Photo_Tags",
    {
      photoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  Photo_Tags.associate = function (models) {
    Photo_Tags.belongsToMany(models.Tag, { through: Photo_Tags });
    Photo_Tags.belongsToMany(models.Photo, { through: Photo_Tags });
  };
  return Photo_Tags;
};
