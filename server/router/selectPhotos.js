module.exports = (request, knex) => {
  let { place, description, url, species, gender } = request;
  place = place || "";
  description = description || "";
  url = url || "";
  species = species || "";
  gender = gender || "";
  description || console.log(place, description, url, species, gender);
  return knex("photos")
    .join("kamos", "photos.kamo_id", "=", "kamos.id")
    .where({ place: place })
    .orWhere({ description: description })
    .orWhere({ url: url })
    .orWhere({ species: species })
    .orWhere({ gender: gender })
    .select(
      "photos.id",
      "photos.place",
      "photos.description",
      "photos.url",
      "kamos.species",
      "kamos.gender"
    );
  // .then((kamoArray) => kamoArray[0]);
};
