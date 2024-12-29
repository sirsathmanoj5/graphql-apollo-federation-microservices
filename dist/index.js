"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gateway_1 = require("@apollo/gateway");
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const PORT = process.env.PORT || 4000;
const gateway = new gateway_1.ApolloGateway({
    supergraphSdl: new gateway_1.IntrospectAndCompose({
        subgraphs: [
            {
                "name": "service-1",
                // "url": "http://localhost:4001"
            },
            {
                "name": "service-1",
                // "url": "http://localhost:4002"
            }
        ]
    })
});
const server = new server_1.ApolloServer({ gateway });
(0, standalone_1.startStandaloneServer)(server).then((serverInfo) => {
    console.log(`Server ready at ${serverInfo.url}`);
});
