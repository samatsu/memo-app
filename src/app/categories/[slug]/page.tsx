import { getBlogEntriesByCategory } from "@/lib/blogPostClient";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import BlogPostSummaryCard from "@/components/BlogPostSummaryCard";

export const dynamicParams = true;

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export default async function Categories(props: CategoryPageProps) {
  const { params } = props;
  const posts = await getBlogEntriesByCategory(params.slug);
  return (
    <main>
      <Typography variant="h3">Category: {params.slug}</Typography>
      <Divider />
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {posts.items.map((post) => {
              return (
                <Grid item xs={12} md={6}>
                  <BlogPostSummaryCard key={post.fields.slug} post={post} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <div>Placeholder</div>
        </Grid>
      </Grid>
    </main>
  );
}
