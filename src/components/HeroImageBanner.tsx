import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

interface HeroImageBannerProps {
  data: {
    description: string;
    image: string;
    imageText: string;
    title: string;
    linkText?: string;
    linkUrl?: string;
  };
}

export default function HeroImageBanner(props: HeroImageBannerProps) {
  const { data } = props;

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${data.image})`,
      }}
      style={
        {
          "--post-image": data.image,
        } as any
      }
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={data.image}
          alt={data.imageText}
        />
      }
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {data.title}
            </Typography>
            <Typography variant="h5" color="inherit" sx={{ marginBottom: 2 }}>
              {data.description}
            </Typography>
            {data.linkUrl && (
              <Link variant="subtitle1" href={data.linkUrl}>
                {data.linkText}
              </Link>
            )}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
