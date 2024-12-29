import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";
import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone';

const PORT = process.env.PORT || 4000;

const gateway = new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
        subgraphs:[
            {
                "name": "service-1",
                "url": "http://localhost:4001"
            },
            {
                "name": "service-1",
                "url": "http://localhost:4002"
            }
        ]
    })
});

const server = new ApolloServer({ gateway });

startStandaloneServer(server).then((serverInfo) => {
    console.log(`Server ready at ${serverInfo.url}`);
})