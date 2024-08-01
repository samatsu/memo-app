import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import Sidebar from "@/components/Sidebar";
import HeroImageBanner from "@/components/HeroImageBanner";
import LatestPostList from "@/components/LatestPostList";

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

//  image: "https://picsum.photos/1100/350",

const mainFeaturedPost = {
  title: "Net planet-es V3",
  description: "技術的な備忘録、ツールや趣味の情報を公開しているサイトです。",
  image: "/imgs/TopHero.jpg",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://picsum.photos/200/300",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://picsum.photos/200/300",
    imageLabel: "Image Text",
  },
];

type PostType = {
  date: string;
  description: string;
  image: string;
  imageLabel: string;
  title: string;
};
const posts: PostType[] = [
  {
    title: "hello",
    description: "gehegehge",
    imageLabel: "Go",
    image:
      "https://cdn.pixabay.com/photo/2012/04/23/16/12/click-38743_1280.png",
    date: "2024-05-11",
  },
  {
    title: "hello",
    description: "gehegehge",
    imageLabel: "Go",
    image:
      "https://cdn.pixabay.com/photo/2012/04/23/16/12/click-38743_1280.png",
    date: "2024-05-11",
  },
  {
    title: "hello",
    description: "gehegehge",
    imageLabel: "Go",
    image:
      "https://cdn.pixabay.com/photo/2012/04/23/16/12/click-38743_1280.png",
    date: "2024-05-11",
  },
];

const sidebar = {
  title: "お知らせ",
  description:
    "このサイトは作成途中です。なにかありましたらのページからお知らせください。",
  categories: [
    { title: "Uncategorized", url: "/categories/uncategorized" },
    { title: "Windows", url: "/categories/windows" },
    { title: "Power Automate", url: "/categories/power automate" },
    { title: "OutSystems", url: "/categories/outsystems" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "X", icon: XIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default async function Home() {
  return (
    <main>
      <HeroImageBanner data={mainFeaturedPost} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <LatestPostList />
          {/* <Typography variant="h6" gutterBottom>
                Latest Posts
              </Typography>
              <Divider />
              {featuredPosts.map((post) => (
                <LatestPost key={post.title} post={post} />
              ))} */}
        </Grid>
        <Grid item xs={12} md={4}>
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            categories={sidebar.categories}
            social={sidebar.social}
          />
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
// export default function Home() {
//   return <main className={styles.main}></main>;
// }
