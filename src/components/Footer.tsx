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
      <Link color="inherit" href="https://memo-app-psi.vercel.app/">
        Net Planetes V3 Beta
      </Link>
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
                Headless
                CMSを使用したサイトの構築を体験したくて突貫で作成したサイトです。
                CMSにContentful, フロントエンドに Next.js,
                UIコンポーネントにMaterial
                UI、メール送信にResendを使用させてもらっています。
                有償のデザインテンプレートは使用していないのでページデザインはシンプルです。
                ツーリングや旅行先の情報など趣味に関する情報を投稿していこうと考えています。
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
              <Link href="https://nextjs.org/" color="#ecf0f1">
                Next.js
              </Link>
              /
              <Link href="https://mui.com/material-ui/" color="#ecf0f1">
                Material UI
              </Link>
              /
              <Link href="https://www.contentful.com/" color="#ecf0f1">
                Contentful
              </Link>
              /
              <Link href="https://resend.com/" color="#ecf0f1">
                Resend
              </Link>
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
