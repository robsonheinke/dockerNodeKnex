const tables = require('../constants/tables');

const query = `CREATE DATABASE ${process.env.DB_DATABASE}`;

exports.up = async (knex) => {
  await knex.schema.createTable(tables.test.name, (table) => {
    table.increments().notNullable();
    table.string(tables.test.columns.description);
    table.integer(tables.test.columns.quantity);
  });
};

exports.down = async (knex) => {
  return await knex.schema.dropTable(tables.test.name);
};
