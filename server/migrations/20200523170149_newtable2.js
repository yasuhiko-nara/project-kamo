exports.up = function (knex, Promise) {
  // create the 'users' table with three columns
  return knex.schema.createTable("photos", (t) => {
    t.increments() // auto-incrementing id column
      .index() // index this column
      .primary();

    t.string("place").notNullable().index();

    t.text("description").index();

    t.string("url") // maximum length of 15 characters
      .notNullable() // add a not-null constraint to this column
      .index(); // index it

    t.integer("kamo_id") // maximum length of 15 characters
      .notNullable() // add a not-null constraint to this column
      .index(); // index it

    t.timestamp("created_at").notNullable().defaultTo(knex.fn.now()); // default to the current time

    t.foreign("kamo_id").references("kamos.id");
  });
};

exports.down = function (knex, Promise) {
  // undo this migration by destroying the 'users' table
  return knex.schema.dropTable("photos");
};
