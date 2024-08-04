import * as React from "react";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import { getAllPublicTags } from "@/lib/blogPostClient";
import { Tag } from "contentful";
import { useRouter } from "next/navigation";

export default async function SideTags() {
  const tags = await getAllPublicTags();
  return (
    <>
      <Typography variant="h6">Tags</Typography>
      <Box display="flex">
        {tags.items.map((tag) => (
          <Button
            color="info"
            variant="contained"
            size="small"
            href={`/tags/${tag.name}/${tag.sys.id}`}
            sx={{ borderRadius: 30, ml: 1 }}
            key={tag.sys.id}
          >
            {tag.name}
          </Button>
        ))}
      </Box>
    </>
  );
}
