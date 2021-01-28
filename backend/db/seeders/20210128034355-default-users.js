"use strict";

const bcrypt = require("bcryptjs");
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // create filler users
    const fillerUsers = [];
    const numFillerUsers = 20; // edit this to edit the number of users created

    for (let i = 0; i < numFillerUsers; i++) {
      let userName = faker.internet.userName();
      while (userName.length > 20) {
        userName = faker.internet.userName();
      }

      const email = faker.internet.email();
      const hashedPassword = await bcrypt.hash(userName + "234", 10);

      fillerUsers.push({
        username: userName,
        email: email,
        hashedPassword: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    // hard coded users
    const passwordDemo = "demo";
    const hashedPasswordDemo = await bcrypt.hash(passwordDemo, 10);

    const password1 = "password1";
    const hashedPassword1 = await bcrypt.hash(password1, 10);

    const password2 = "password2";
    const hashedPassword2 = await bcrypt.hash(password2, 10);

    const password3 = "password3";
    const hashedPassword3 = await bcrypt.hash(password3, 10);

    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Newbie",
          email: "new-housr@gmail.com",
          hashedPassword: hashedPassword2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "DemoUser",
          email: "demo@demo.com",
          hashedPassword: hashedPasswordDemo,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "PatrickStar",
          email: "patrick@gmail.com",
          hashedPassword: hashedPassword1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "optimus",
          email: "optimus@protonmail.com",
          hashedPassword: hashedPassword3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        ...fillerUsers,
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};