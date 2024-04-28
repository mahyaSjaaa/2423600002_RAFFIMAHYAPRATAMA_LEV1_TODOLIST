import knex from "knex";

const koneksi = knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "to_do_list_ukm",
  },
});

// export const createTable = async () => {
//   try {
//     await koneksi.schema.createTable("user", (table) => {
//         table.increments("id").primary();
//         table.string("task", 255).notNullable();
//         table.string("status", 255).notNullable();
//         table.string("nrp").notNullable().unique();
//         table.foreign("nrp").references("nrp").on("user");
//     });
//     console.log('Table "users" created successfully!');
//   } catch (error) {
//     console.error("Error creating table:", error);
//   }
// };

export default koneksi;
