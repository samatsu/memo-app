import * as React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

interface SidebarProps {
  categories: ReadonlyArray<{
    url: string;
    title: string;
  }>;
  description: string;
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
  }>;
  title: string;
}

export default function Sidebar(props: SidebarProps) {
  const { categories, description, social, title } = props;

  return (
    <aside>
      <Paper elevation={2} sx={{ p: 2, bgcolor: "grey.100", mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Paper elevation={2} sx={{ p: 2 }}>
        <Typography variant="h6">Category</Typography>
        {categories.map((archive) => (
          <Link
            variant="body1"
            href={archive.url}
            key={archive.title}
            sx={{
              display: "block",
            }}
          >
            {archive.title}
          </Link>
        ))}
      </Paper>
      {/* <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          variant="body1"
          href="#"
          key={network.name}
          sx={{
            display: "block",
            mb: 0.5,
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: "center",
            }}
          >
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))} */}
    </aside>
  );
}
