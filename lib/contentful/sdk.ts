import { GraphQLClient } from "graphql-request";

import { getSdk, Post } from "./generated/graphql";

/**
 * Creates a GraphQL client for interacting with the Contentful API.
 *
 * @constant
 * @type {GraphQLClient}
 */
const client: GraphQLClient = new GraphQLClient(
  process.env.CONTENTFUL_GRAPHQL_ENDPOINT!,
  {
    headers: {
      authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  },
);

const sdk = getSdk(client);

/**
 * Retrieves all posts from the Contentful post collection.
 *
 * @returns A promise that resolves to an array of `Post` objects.
 */
const getAllPosts = async (): Promise<Post[]> => {
  const { postCollection } = await sdk.getAllPosts();

  return (postCollection?.items as Post[]) || [];
};

/**
 * Retrieves a single post by its slug from the Contentful post collection.
 *
 * @param slug - The slug identifier of the post to retrieve.
 * @returns A promise that resolves to a `Post` object if found, or `null` otherwise.
 */
const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const { postCollection } = await sdk.getPostBySlug({ slug });

  return (postCollection?.items?.[0] as Post) || null;
};

// const getSiteMetadata = async (): Promise<SiteMetadata | null> => {
//   const { siteMetadataCollection } = await sdk.getSiteMetadata();

//   return (siteMetadataCollection?.items?.[0] as SiteMetadata) || null;
// };

/**
 * Exports the GraphQL client, SDK, and functions for interacting with the Contentful API.
 *
 * @exports
 * @module contentfulSdk
 */
export { client, sdk, getAllPosts, getPostBySlug };
