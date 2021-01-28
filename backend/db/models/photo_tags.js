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
    Photo_Tag.belongsTo(models.Tag, { through: Photo_Tag });
    Photo_Tag.belongsTo(models.Photo, { through: Photo_Tag });
  };
  return Photo_Tag;
};
