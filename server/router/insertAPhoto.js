module.exports = (request, knex) => {
  const { place, description, url, species, gender } = request.input;

  return knex("kamos")
    .select("id")
    .where({ species: species, gender: gender })
    .then((idArray) => {
      if (idArray.length === 0) {
        return knex("kamos")
          .insert({ species: species, gender: gender })
          .then(() => {
            return "Added a photo of a new kamo";
          });
      }
      const kamo_id = idArray[0].id;
      return knex("photos")
        .insert({
          place: place,
          description: description,
          url: url,
          kamo_id: kamo_id,
        })
        .then(() => {
          return "Added a photo";
        });
    });
};
