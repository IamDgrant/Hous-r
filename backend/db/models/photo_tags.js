"use strict";
module.exports = (sequelize, DataTypes) => {
  const Photo_Tag = sequelize.define(
    "Photo_Tag",
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
  Photo_Tag.associate = function (models) {
    Photo_Tag.belongsToMany(models.Tag, { through: Photo_Tags });
    Photo_Tag.belongsToMany(models.Photo, { through: Photo_Tags });
  };
  return Photo_Tags;
};
