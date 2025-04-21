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
      // Foreign key to `userRegistration`
      // table.integer("registrationId").unsigned().unique().references("id").inTable("userRegistration").onDelete("SET NULL");
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

      // This is the nullable foreign key to `UserNew`
      // table.integer("userNewId").unsigned().nullable();
      // table
      //   .foreign("userNewId")
      //   .references("id")
      //   .inTable("usersNew")
      //   .onDelete("SET NULL");
    }
  )
    .alterTable("usersNew", (table) => {
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

      table.unique(["userId", "pdfId"]); // prevent duplicates
    });
}
/**
 * @param {import('knex').Knex} knex
 */
export async function down(knex) {
  await knex.schema
    .dropTableIfExists("user_pdf")
    .dropTableIfExists("Pdf")
    .dropTableIfExists("usersNew")
    .dropTableIfExists("userRegistration");
}
