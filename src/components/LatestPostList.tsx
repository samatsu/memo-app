import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
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
      <Box textAlign="center">
        <Button color="primary" href="/articles" variant="contained">
          Show All Posts
        </Button>
      </Box>
    </>
  );
}
