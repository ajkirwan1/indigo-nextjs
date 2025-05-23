/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("properties", function (table) {
      table.increments('id').primary();
      table.string("title")
      table.string("name")
      table.string("image")
      table.string("pdfid").notNullable();
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