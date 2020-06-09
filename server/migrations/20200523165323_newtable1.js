exports.up = function (knex, Promise) {
  // create the 'users' table with three columns
  return knex.schema.createTable("kamos", (t) => {
    t.increments() // auto-incrementing id column
      .index() // index this column
      .primary();

    t.string("species").notNullable().index();
    t.string("gender").notNullable().index();
    t.unique(["species", "gender"]);
  });
};

exports.down = function (knex, Promise) {
  // undo this migration by destroying the 'users' table
  return knex.schema.dropTable("kamos");
};
