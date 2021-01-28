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
  Photo_Tag.associate = function (models) {};
  return Photo_Tag;
};
