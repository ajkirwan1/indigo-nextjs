/**
 * @format
 * @param {import('knex').Knex} knex
 */

export async function up(knex) {
  await knex.schema
    .createTable("usersNew", (table) => {
      table.increments("id").primary();
      table.string("userName").nullable();
      table.string("userType").nullable(); // 'client' or 'admin'
      table.string("hashedPassword").nullable();
      table.timestamp("createdAt").defaultTo(knex.fn.now());
      table.integer("registrationId").unsigned().nullable();
    })
    .createTable("userRegistration", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("phoneNumber").notNullable();
      table.string("buyertype").notNullable();
      table.string("location").notNullable();
      table.string("purchaseTimeline").notNullable();
      table.string("investmentInterest").notNullable();
      table.string("investmentRange").notNullable();
      table.string("previousInvestment").notNullable();
      table.string("registration").defaultTo("pending").notNullable();
      table.timestamp("createdAt").defaultTo(knex.fn.now()).notNullable();
    })
    .alterTable("userNew", (table) => {
      table
        .foreign("registrationId")
        .references("id")
        .inTable("userRegistration")
        .onDelete("SET NULL");
    })
    .createTable("Pdf", (table) => {
      table.string("id").primary(); // cuid
      table.string("name").notNullable();
      table.text("url").notNullable();
    })
    .createTable("userPdf", (table) => {
      table.increments("id").primary();
      table
        .integer("userId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("usersNew")
        .onDelete("CASCADE");
      table
        .string("pdfId")
        .notNullable()
        .references("id")
        .inTable("Pdf")
        .onDelete("CASCADE");
      table.unique(["userId", "pdfId"]);
    })
    .createTable("MagicLinkToken", (table) => {
      table.string("id").primary(); // cuid or uuid
      table.string("email").notNullable();
      table.string("token").unique().notNullable();
      table.timestamp("expiresAt").notNullable();
      table.boolean("used").defaultTo(false);
      table.timestamp("createdAt").defaultTo(knex.fn.now());
      table.integer("userId").unsigned().references("id").inTable("usersNew").onDelete("CASCADE");
    });
}
/**
 * @param {import('knex').Knex} knex
 */
export async function down(knex) {
  await knex.schema
    .dropTableIfExists("userPdf")
    .dropTableIfExists("Pdf")
    .dropTableIfExists("userNew")
    .dropTableIfExists("userRegistration")
    .dropTableIfExists("MagicLinkToken");
}
