import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import BlogPostSummary from "@/components/BlogPostSummary";
import { getBlogEntries, BlogPostSkelton } from "@/lib/blogPostClient";

export default async function LatestPostList() {
  const posts = await getBlogEntries();
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Latest Posts
      </Typography>
      <Divider />
      {posts.items.map((post) => (
        <BlogPostSummary key={post.fields.slug} post={post} />
      ))}
    </>
  );
}
