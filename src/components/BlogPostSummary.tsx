import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { BlogPost } from "@/lib/blogPostClient";

interface BlogPostSummaryProps {
  post: BlogPost;
}

export default function BlogPostSummary(props: BlogPostSummaryProps) {
  const {
    post: { fields },
  } = props;

  const img = fields.mainImage as any;

  return (
    <CardActionArea
      component="a"
      href={`/articles/${fields.slug}`}
      sx={{ mt: 3, mb: 3 }}
    >
      <Card sx={{ display: "flex" }}>
        {img && (
          <CardMedia
            component="img"
            sx={{
              width: 250,
              display: { xs: "none", sm: "block" },
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            image={img.fields.file.url}
            alt={img.fields.title}
          />
        )}
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {fields.title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "text.secondary",
            }}
          >
            {new Date(fields.publishDate).toLocaleDateString()}
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
            {fields.summary}
          </Typography>
          <Box sx={{ marginBottom: 1 }}>
            <Chip label={fields.category} color="secondary" />
          </Box>
          <Button variant="contained" color="primary">
            Read more
          </Button>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
