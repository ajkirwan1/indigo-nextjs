/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return await knex.schema.createTable("passwords", function (table) {
      table.integer("id").unique();
      table.string("hashedPassword");
      table.string("userId").references("id").inTable("users").onDelete("CASCADE");
      table.timestamp("createdAt").defaultTo(knex.fn.now()).index();
  })
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable('passwords')
  }
  