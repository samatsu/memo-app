import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import Sidebar from "@/components/Sidebar";
import HeroImageBanner from "@/components/HeroImageBanner";
import LatestPostList from "@/components/LatestPostList";
import SideNote from "@/components/SideNote";

//  image: "https://picsum.photos/1100/350",

const mainFeaturedPost = {
  title: "Net planet-es β版",
  description: "自分がいった旅行先のスポット情報などを紹介予定のサイトです。",
  image: "/imgs/TopHero.jpg",
  imageText: "main image description",
};

const sidebar = {
  title: "お知らせ",
  description:
    "このサイトは作成中です。Contentful+Next.js+Material UIでテスト実装したサイトです。なにかありましたらのお問い合わせページからお知らせください。",
  // categories: [
  //   { title: "Uncategorized", url: "/categories/uncategorized" },
  //   { title: "Windows", url: "/categories/windows" },
  //   { title: "Power Automate", url: "/categories/power automate" },
  //   { title: "OutSystems", url: "/categories/outsystems" },
  // ],
  // social: [
  //   { name: "GitHub", icon: GitHubIcon },
  //   { name: "X", icon: XIcon },
  //   { name: "Facebook", icon: FacebookIcon },
  // ],
};

export default async function Home() {
  return (
    <main>
      <HeroImageBanner data={mainFeaturedPost} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <LatestPostList />
        </Grid>
        <Grid item xs={12} md={4}>
          <SideNote title={sidebar.title} description={sidebar.description} />
          <Sidebar />
        </Grid>
      </Grid>
      {/* <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}
    </main>
  );
}
