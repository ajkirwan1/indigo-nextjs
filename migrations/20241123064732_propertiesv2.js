/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("properties2", function (table) {
    table.increments("id").primary();
    table.string("title");
    table.string("location");
    table.string("price");
    table.text("description");
    table.string("pdfUrl", 5000);
    table.string("imageUrl", 5000);
    table.timestamp("createdAt").defaultTo(knex.fn.now()).index();
  });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("properties2");
}
