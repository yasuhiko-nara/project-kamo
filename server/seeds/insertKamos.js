exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return (
    knex("kamos")
      // .del()　外部キー参照あるためdeleteできない。そのため、都度rollbackする
      .then(function () {
        // Inserts seed entries
        return knex("kamos").insert([
          {
            species: "karugamo",
            gender: "male",
          },
          {
            species: "karugamo",
            gender: "female",
          },
          {
            species: "magamo",
            gender: "male",
          },
          {
            species: "magamo",
            gender: "female",
          },
        ]);
      })
  );
};
