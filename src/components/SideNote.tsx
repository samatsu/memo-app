import * as React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

interface SitedeNoteProps {
  title: string;
  description: string;
}

export default function SideNote(props: SitedeNoteProps) {
  const { title, description } = props;

  return (
    <aside>
      <Paper elevation={2} sx={{ p: 2, bgcolor: "grey.100", mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
    </aside>
  );
}
