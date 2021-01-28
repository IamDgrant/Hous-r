"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      tagText: {
        type: DataTypes.STRING(20),
      },
    },
    {}
  );
  Tag.associate = function (models) {
    const columnMapping = {
      through: "Photo_Tags",
      otherKey: "photoId",
      foreignKey: "tagId",
    };

    Tag.belongsToMany(models.Photo, columnMapping);
  };
  return Tag;
};
