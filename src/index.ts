import "reflect-metadata";
import * as path from 'path';
import {importSchema} from 'graphql-import';
import { GraphQLServer } from 'graphql-yoga'
import {resolvers} from "./resolvers/app.resolvers";
import {createConnection} from "typeorm";

const typeDefs = importSchema(path.join(__dirname,"./schema.graphql"));
const server = new GraphQLServer({ typeDefs, resolvers });

createConnection().then(async (connection) => {

    console.log("Connected to database:"+connection.isConnected);
    await server.start({port:3000},() => console.log('Server is running on localhost:3000'));

}).catch(error => console.log(error));


