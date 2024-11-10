/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return  knex.schema.createTable("passwords", function (table) {
      table.increments('id').primary();
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
  