import * as React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

const categories = [
  { title: "Uncategorized", url: "/categories/uncategorized" },
  { title: "Windows", url: "/categories/windows" },
  { title: "Power Automate", url: "/categories/power automate" },
  { title: "OutSystems", url: "/categories/outsystems" },
];

export default function Sidebar() {
  return (
    <aside>
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
