/**
 * This module creates and exports a Contentful client for interacting with the Contentful API.
 * @module contentfulClient
 */

import { createClient } from "contentful";

/**
 * Creates a Contentful client instance using environment variables for authentication.
 * @constant
 * @type {import('contentful').ContentfulClientApi}
 */
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
});

/**
 * Exports the configured Contentful client for use in other parts of the application.
 * @exports
 * @default
 */
export default client;
