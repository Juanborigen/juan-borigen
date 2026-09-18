import { getCategories, getPosts } from "@/lib/api/posts";
import { PostsBrowser } from "@/components/PostsBrowser";

export const AllPosts = async () => {
  const [posts, categories] = await Promise.all([getPosts(), getCategories()]);

  return (
    <section className="max-w-6xl 2xl:w-[85vw] mx-auto py-32">
      <PostsBrowser posts={posts} categories={categories} />
    </section>
  );
};

export default AllPosts;
