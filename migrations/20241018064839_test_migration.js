/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return await knex.schema.createTable("users", function (table) {
      table.string("id").unique();
      table.string("username", 25).notNullable();
      table.string("firstname", 25).notNullable();
      table.string("lastname", 25).notNullable();
      table.string("email", 25).notNullable();
      table.integer("adminaccess").notNullable();
      table.integer("consultingaccess").notNullable();
      table.integer("propertyaccess").notNullable();
      table.dateTime("accessrequestdate").notNullable();
      table.timestamp("createdAt").defaultTo(knex.fn.now()).index();
  })
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable('users')
  }
  