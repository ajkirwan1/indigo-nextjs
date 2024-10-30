/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("investmentinterests", function (table) {
      table.increments('id').primary();
      table.string("interesttype").nullable();
      table.string("userId").references("id").inTable("users").onDelete("CASCADE");
      table.timestamp("createdAt").defaultTo(knex.fn.now()).index();
  })
}
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable('investmentinterests')
  }