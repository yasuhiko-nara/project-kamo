module.exports = (knex) => {
  const kamos = [];
  return knex("kamos")
    .select()
    .then((kamoArray) => {
      kamoArray.forEach((kamo) => kamos.push(kamo));
      // console.log("inside knex=>", kamos);
      return kamos;
    });
};
