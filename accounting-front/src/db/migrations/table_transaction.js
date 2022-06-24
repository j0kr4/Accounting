import { FormikConsumer } from "formik";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("transactions", (table) => {
    table.increments("id");
    table.integer("amount").notNullable();
    table.string("desctiption").notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable("transactions");
}
