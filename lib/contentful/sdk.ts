import { GraphQLClient } from "graphql-request";

import { getSdk } from "./generated/graphql";

const client = new GraphQLClient(process.env.CONTENTFUL_GRAPHQL_ENDPOINT!, {
  headers: {
    authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});

const sdk = getSdk(client);

const getAllPosts = async () => {
  const response = await sdk.getAllPosts();

  const items = response.postCollection?.items;

  return items;
};

export { client, sdk, getAllPosts };
