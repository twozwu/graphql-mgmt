// import clientResolvers from "./clientResolver.js";
// import projectResolvers from "./projectResolver.js";

// export default {
//   Query: {
//     ...clientResolvers.Query,
//     ...projectResolvers.Query,
//   },
//   Mutation: {
//     ...clientResolvers.Mutation,
//     ...projectResolvers.Mutation,
//   },
// };

const clientResolvers = require("./clientResolver");
const projectResolvers = require("./projectResolver");

module.exports = {
  Query: {
    ...clientResolvers.Query,
    ...projectResolvers.Query,
  },
  Mutation: {
    ...clientResolvers.Mutation,
    ...projectResolvers.Mutation,
  },
};
