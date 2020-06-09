module.exports = (request, knex) => {
  const { species, gender } = request;
  return knex("kamos")
    .select()
    .where({ species: species, gender: gender })
    .then((kamoArray) => kamoArray[0]);
};
