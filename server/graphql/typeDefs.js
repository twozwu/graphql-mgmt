import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Client {
    id: ID
    name: String
    email: String
    phone: String
  }

  type Project {
    id: ID
    name: String
    description: String
    status: ProjectStatus!
    client: Client
  }

  input ClientInput {
    id: ID
    name: String
    email: String
    phone: String
  }

  enum ProjectStatus {
    new
    progress
    completed
  }

  input ProjectInput {
    name: String!
    description: String!
    status: ProjectStatus!
    clientId: ID!
  }

  input UpdateProjectInput {
    id: ID!
    name: String!
    description: String!
    status: ProjectStatus!
  }

  type Query {
    project(id: ID!): Project
    projects: [Project]
    client(id: ID!): Client
    clients: [Client]
  }

  type Mutation {
    addClient(clientInput: ClientInput): Client
    deleteClient(id: ID): Client
    addProject(projectInput: ProjectInput): Project
    updateProject(projectInput: UpdateProjectInput): Project
    deleteProject(id: ID!): Project
  }
`;

export default typeDefs;
