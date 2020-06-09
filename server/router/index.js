module.exports = (action, request, knex) => {
  switch (action) {
    case "getAKamo":
      return require("./getAKamo")(request, knex);
    case "getAllKamos":
      return require("./getAllKamos")(knex);
    case "getAllPhotos":
      return require("./getAllPhotos")(knex);
    case "selectPhotos":
      return require("./selectPhotos")(request, knex);
    case "insertAKamo":
      return require("./insertAKamo")(request, knex);
    case "insertAPhoto":
      return require("./insertAPhoto")(request, knex);
    default:
      console.log("no action is input");
  }
};
