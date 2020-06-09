module.exports = (knex) => {
  const photos = [];
  return knex("photos")
    .join("kamos", "photos.kamo_id", "=", "kamos.id")
    .select(
      "photos.id",
      "photos.place",
      "photos.description",
      "photos.url",
      "kamos.species",
      "kamos.gender"
    )
    .then((photoArray) => {
      photoArray.forEach((photo) => photos.push(photo));
      //   console.log("inside knex=>", photos);
      return photos;
    });
};
