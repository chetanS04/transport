"use strict";

const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    const adminEmail = "admin@topntech.com";

    const existingUser = await queryInterface.rawSelect(
      "users",
      {
        where: { email: adminEmail },
      },
      ["id"]
    );

    if (!existingUser) {
      const hashedPassword = await bcrypt.hash("root1234", 10);

      await queryInterface.bulkInsert("users", [
        {
          id: uuidv4(),
          name: "Admin",
          email: adminEmail,
          phone: null,
          tenant_id: null,
          password: hashedPassword,
          role: "ADMIN",
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
      ]);

      console.log("Admin user created!");
    } else {
      console.log("Admin user already exists. Skipping seeder...");
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "users",
      { email: "admin@topntech.com" },
      {}
    );
  },
};
