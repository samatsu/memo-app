import { getBlogEntriesByTag } from "@/lib/blogPostClient";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import BlogPostSummaryCard from "@/components/BlogPostSummaryCard";
import Sidebar from "@/components/Sidebar";

export const dynamicParams = true;

type TagPageProps = {
  params: {
    tagName: string;
    tagId: string;
  };
};

export default async function Tags(props: TagPageProps) {
  const { params } = props;
  const tagName = decodeURI(params.tagName);
  const posts = await getBlogEntriesByTag(params.tagId);
  return (
    <main>
      <Typography variant="h3">Tag: {tagName}</Typography>
      <Divider />
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {posts.items.map((post) => {
              return (
                <Grid item xs={12} md={6} key={post.fields.slug}>
                  <BlogPostSummaryCard key={post.fields.slug} post={post} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} sx={{ mt: 3 }}>
          <Sidebar />
        </Grid>
      </Grid>
    </main>
  );
}
