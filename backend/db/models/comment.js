"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      commentText: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      photoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      commentById: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  Comment.associate = function (models) {
    Comment.hasOne(models.User, { foreignKey: "commentById" });
    Comment.hasOne(models.Photo, { foreignKey: "photoId" });
  };
  return Comment;
};
