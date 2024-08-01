import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { BlogPost } from "@/lib/blogPostClient";

interface BlogPostSummaryCardProps {
  post: BlogPost;
}

export default function BlogPostSummaryCard(props: BlogPostSummaryCardProps) {
  const {
    post: { fields },
  } = props;

  const img = fields.mainImage as any;

  return (
    <CardActionArea href={`/articles/${fields.slug}`} sx={{ mt: 3, mb: 3 }}>
      <Card>
        {img && (
          <CardMedia
            component="img"
            sx={{
              height: 140,
              display: { xs: "none", sm: "block" },
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            image={img.fields.file.url}
            alt={img.fields.title}
          />
        )}
        <CardContent>
          <Typography component="div" variant="h5">
            {fields.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {fields.summary}
            {new Date(fields.publishDate).toLocaleDateString()}
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 2 }}></Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
            Category: {fields.category}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
