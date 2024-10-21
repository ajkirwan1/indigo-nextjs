/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return await knex.schema.createTable("sessions", function (table) {
    table.string("id").unique();
    table.string("userId");
    table.dateTime("expiresAt");
    table.string("user").references("id").inTable("users");
    table.timestamp("createdAt").defaultTo(knex.fn.now()).index();
})
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('sessions')
}
