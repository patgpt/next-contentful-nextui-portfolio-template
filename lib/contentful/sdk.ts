import { GraphQLClient } from "graphql-request";

import { getSdk, Post } from "./generated/graphql";

const client = new GraphQLClient(process.env.CONTENTFUL_GRAPHQL_ENDPOINT!, {
  headers: {
    authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});

const sdk = getSdk(client);

const getAllPosts = async (): Promise<Post[]> => {
  const response = await sdk.getAllPosts();

  const items = response.postCollection?.items;

  return items as Post[];
};

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const response = await sdk.getPostBySlug({ slug });

  return response.postCollection?.items?.[0] as Post;
};

export { client, sdk, getAllPosts };
