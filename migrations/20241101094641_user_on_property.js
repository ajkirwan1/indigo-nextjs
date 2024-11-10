/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("usersonproperties", function (table) {
        table.increments('id').primary();
        table.string("userId").notNullable();
        table.integer("propertyId").notNullable();
        table.timestamp("createdAt").defaultTo(knex.fn.now()).index();
  })
    }
    /**
     * @param { import("knex").Knex } knex
     * @returns { Promise<void> }
     */
    export function down(knex) {
    return knex.schema.dropTable('usersonproperties')
    }