const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const path = require("path");

// setup knex
const knexConfig = require("./config");
const knex = require("knex")(knexConfig);

// The schema should model the full data object available.
const schema = buildSchema(`
  type Kamo {
    id:Int
    species: String
    gender: String
  }
  type Photo {
    id:Int
    place: String
    description: String
    url: String
    species: String
    gender: String
}
  input InputAKamo{
    species : String
    gender: String
  }
  input InputAPhoto{
    place: String
    description: String
    url: String
    species: String
    gender: String
  }

  type Query {
    Kamos: [Kamo]
    Kamo(species: String, gender: String): Kamo
    Photos:[Photo]
    SelectPhotos(place: String, description: String, species: String, gender:String) :[Photo]
  }

  type Mutation {
    AddAKamo(input: InputAKamo): Kamo
    AddAPhoto(input: InputAPhoto): String
  }
`);

// The root provides the resolver functions for each type of query or mutation.
const root = {
  Kamos: () => {
    return require("./router")("getAllKamos", "", knex);
  },

  Kamo: (request) => {
    return require("./router")("getAKamo", request, knex);
  },
  AddAKamo: (request) => {
    return require("./router")("insertAKamo", request, knex);
  },
  Photos: () => {
    return require("./router")("getAllPhotos", "", knex);
  },
  SelectPhotos: (request) => {
    return require("./router")("selectPhotos", request, knex);
  },
  AddAPhoto: (request) => {
    return require("./router")("insertAPhoto", request, knex);
  },
};

// Start your express server!
const app = express();
// const cors = require("cors");
// app.use(cors());

// Serve static assets
// app.use("/client", express.static(__dirname + "/build"));
// app.use(express.static(__dirname + "../client/build"));
app.use(express.static(path.resolve(__dirname, "..", "client/build")));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
  console.log("dirName!!!", __dirname);
});
