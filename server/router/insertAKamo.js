module.exports = (request, knex) => {
  const kamos = [];
  const { species, gender } = request.input;
  return knex("kamos")
    .insert({ species: species, gender: gender })
    .then(() => {
      return knex("kamos")
        .select()
        .then((kamoArray) => {
          kamoArray.forEach((kamo) => kamos.push(kamo));
          //   console.log("inside knex=>", kamos);
          return kamos.pop();
        });
    });
};
