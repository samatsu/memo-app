import {
  createClient,
  EntryFieldTypes,
  EntryFields,
  Asset,
  EntrySkeletonType,
} from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export type BlogPost = {
  fields: {
    title: EntryFields.Text;
    slug: EntryFields.Text;
    category: EntryFields.Text;
    summary: EntryFields.Text;
    body: EntryFields.Text;
    publishDate: EntryFields.Date;
    mainImage: Asset;
  };
};
export type BlogPostSkelton = BlogPost & {
  contentTypeId: "blogPost";
};

export const getBlogEntries = async (skip = 0, limit = 25) => {
  const posts = await client.getEntries<BlogPostSkelton>({
    content_type: "blogPost",
    skip: skip,
    limit: limit,
  });
  return posts;
};

export const getBlogEntryBySlug = async (slug: string) => {
  const posts = await client.getEntries<BlogPostSkelton>({
    content_type: "blogPost",
    "fields.slug[match]": slug,
    limit: 1,
  });
  return posts.items[0];
};

export const getBlogEntriesByCategory = async (category: string) => {
  const posts = await client.getEntries<BlogPostSkelton>({
    content_type: "blogPost",
    "fields.category[match]": category,
  });
  return posts;
};

export const searchBlogEntries = async (searchTerm: string) => {
  const posts = await client.getEntries<BlogPostSkelton>({
    content_type: "blogPost",
    query: searchTerm,
  });
  return posts;
};
