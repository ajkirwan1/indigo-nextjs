/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
    await knex.schema.createTable('userRegistration', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('phoneNumber').notNullable();
      table.string('buyertype').notNullable();
      table.string('location').notNullable();
      table.string('purchaseTimeline').notNullable();
      table.string('investmentInterest').notNullable();
      table.string('investmentRange').notNullable();
      table.string('previousInvestment').notNullable();
      table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable();
  
      table.index(['createdAt']);
    });
  }
  
  /**
   * @param {import('knex').Knex} knex
   */
  export async function down(knex) {
    await knex.schema.dropTable('userRegistration');
  }
  