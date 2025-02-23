// Route Segment Config: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
import { getBlogEntryBySlug } from "@/lib/blogPostClient";
import { notFound } from "next/navigation";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS, Text } from "@contentful/rich-text-types";
import { type } from "os";

export const dynamicParams = true;

const renderOptions: Options = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "blogPost") {
        return (
          <a href={`/archives/${node.data.target.fields.slug}`}>
            {" "}
            {node.data.target.fields.title}
          </a>
        );
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        );
      }

      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <img
          src={`https://${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.length === 1 &&
        (node.content[0] as Text)?.marks.find((x) => x.type === "code")
      ) {
        return <div>{children}</div>;
      }
      return <p>{children}</p>;
    },
  },
  renderMark: {
    [MARKS.CODE]: (text: React.ReactNode) => {
      const regex = /^lang:(\w+)/;
      const codeSnippet = (text as string) || "";
      // If the code snippet doesn't have the expected metadata
      if (!regex.test(codeSnippet)) {
        return <code>{codeSnippet}</code>;
      }
      // Extract the language
      const matches = regex.exec(codeSnippet);
      const language = matches && matches?.length > 2 ? matches[1] : "";

      // Remove the first line to avoid including metadata in the rendered version
      return (
        <SyntaxHighlighter
          language={language}
          style={vs2015}
          className="rounded-md text-sm"
          showLineNumbers
        >
          {codeSnippet.split("\n").slice(1).join("\n")}
        </SyntaxHighlighter>
      );
    },
  },
};

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPost(props: BlogPageProps) {
  const { params } = props;
  const post = await getBlogEntryBySlug(params.slug);
  if (post == null) {
    return notFound();
  }
  return (
    <main>{documentToReactComponents(post.fields.body, renderOptions)}</main>
  );
}
