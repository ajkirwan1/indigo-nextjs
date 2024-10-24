/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return await knex.schema.createTable("properties", function (table) {
      table.integer("id").unique();
      table.string("title");
      table.string("name");
      table.string("image");
      table.string("pdfid");
      table.timestamp("createdAt").defaultTo(knex.fn.now()).index();
  })
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable('properties')
  }
  