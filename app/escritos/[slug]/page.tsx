import { notFound } from "next/navigation";
import { getPosts, getPostBySlug } from "@/lib/api/posts";
import { SinglePost } from "@/components/SinglePost";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = async () => {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async ({ params }: Props) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title.rendered };
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return <SinglePost post={post} />;
}
