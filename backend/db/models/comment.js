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
    Comment.belongsTo(models.User, { foreignKey: "commentById" });
    Comment.belongsTo(models.Photo, { foreignKey: "photoId" });
  };
  return Comment;
};
