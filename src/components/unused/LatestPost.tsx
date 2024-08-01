import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useRouter } from "next/router";

interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
}

export default function LatestPost(props: FeaturedPostProps) {
  const { post } = props;
  const router = useRouter();
  return (
    <CardActionArea component="a" href="#" sx={{ mt: 3, mb: 3 }}>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 160, display: { xs: "none", sm: "block" } }}
          image={post.image}
          alt={post.imageLabel}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {post.title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "text.secondary",
            }}
          >
            {post.date}
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
            {post.description}
          </Typography>
          <Typography variant="subtitle1" color="primary">
            Continue reading...
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
