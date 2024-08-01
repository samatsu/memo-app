import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Net Planetes V3
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  title: string;
}

export default function Footer(props: FooterProps) {
  const { description, title } = props;

  return (
    <footer>
      <Box sx={{ bgcolor: "#202020", color: "#ecf0f1", mt: 3, py: 3 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                このサイトについて
              </Typography>
              <Divider />
              <Typography component="div" gutterBottom>
                このサイトではプログラミングのサンプルコードやツール、ソフトウェア開発において役に立ちそうな技術的な情報などを掲載しています。
                サイトオリジナルのソースに関して著作権はサイト管理者が保持します。
                ただし、特に断りがない限り、ソースプログラムを自由に参照、改変してご利用いただけます。
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Powered By
              </Typography>
              <Divider />
              <Typography component="div" gutterBottom>
                サイトを構築する上でお世話になっているテクノロジーや画像のサイト
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ bgcolor: "#161616", color: "#ecf0f1", py: 3 }}>
        <Copyright />
      </Box>
    </footer>
    // <Box
    //   component="footer"
    //   sx={{ bgcolor: "primary.dark", color: "white", mt: 3, py: 3 }}
    // >
    //   <Container maxWidth="lg">
    //     <Typography variant="h6" align="center" gutterBottom>
    //       {title}
    //     </Typography>
    //     <Typography variant="subtitle1" align="center" component="p">
    //       {description}
    //     </Typography>
    //     <Copyright />
    //   </Container>
    // </Box>
  );
}
