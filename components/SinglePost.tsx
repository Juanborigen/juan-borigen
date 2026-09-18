import type { WPPost } from "@/types/post";

interface Props {
  post: WPPost;
}

export const SinglePost = ({ post }: Props) => {
  const date = new Date(post.date).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="w-[93vw] 2xl:w-[85vw] mx-auto pt-20 pb-72">
      <article className="max-w-2xl mx-auto flex flex-col gap-6">
        <span className="text-xs uppercase tracking-widest text-foreground/40">
          {date}
        </span>
        <h1
          className="text-4xl font-semibold tracking-tighter text-center leading-tight text-foreground"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <div
          className="post-content text-center text-lg"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </main>
  );
};

export default SinglePost;
