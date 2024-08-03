import {
  getBlogEntriesByCategory,
  searchBlogEntries,
} from "@/lib/blogPostClient";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import BlogPostSummaryCard from "@/components/BlogPostSummaryCard";
import Sidebar from "@/components/Sidebar";

export const dynamicParams = true;

type SearchPageProps = {
  searchParams?: {
    term?: string;
    page?: string;
  };
};

const postsPerPage = 25;

export default async function SearchPage(props: SearchPageProps) {
  const { searchParams } = props;
  const term = searchParams?.term || "";
  const currentPage = searchParams?.page ? parseInt(searchParams?.page) : 1;

  const posts = await searchBlogEntries(
    term,
    (currentPage - 1) * postsPerPage,
    postsPerPage
  );
  return (
    <main>
      <Typography variant="h3">Search Term: {term}</Typography>
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
