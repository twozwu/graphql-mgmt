const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
// const port = process.env.PORT || 5000;
// import { ApolloServer } from "apollo-server-express";
// import {
//   ApolloServerPluginDrainHttpServer,
//   ApolloServerPluginLandingPageLocalDefault,
// } from "apollo-server-core";
// import http from "http";
const { ApolloServer } = require("apollo-server-express");
const {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");
const http = require("http");
// import express from "express";
// import colors from "colors";
// import connectDB from "./config/db.js";
// import "dotenv/config";
// import cors from "cors";

// import typeDefs from "./graphql/typeDefs.js";
// import resolvers from "./graphql/resolves/index.js";

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolves/index.js");

const app = express();
app.use(cors());

async function startApolloServer(typeDefs, resolvers) {
  // Connect to database
  connectDB();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  await server.start();
  server.applyMiddleware({ app });
  await new Promise((resolve) =>
    httpServer.listen({ port: process.env.PORT }, resolve)
  );
  console.log(
    `🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
  );
}

startApolloServer(typeDefs, resolvers);
