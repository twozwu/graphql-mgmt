import clientResolvers from "./clientResolver.js";
import projectResolvers from "./projectResolver.js";

export default {
  Query: {
    ...clientResolvers.Query,
    ...projectResolvers.Query,
  },
  Mutation: {
    ...clientResolvers.Mutation,
    ...projectResolvers.Mutation,
  },
};

// export default {
//   Query: {},
//   Mutation: {},
// };
