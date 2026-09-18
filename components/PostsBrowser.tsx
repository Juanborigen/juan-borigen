"use client";

import { useMemo, useState } from "react";
import { TransitionLink } from "@/components/TransitionLink";
import type { WPCategory, WPPost } from "@/types/post";

const ALL_CATEGORIES_ID = 0;

type FilterItemProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const FilterItem = ({ label, isActive, onClick }: FilterItemProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`relative w-fit text-left text-sm tracking-wide transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-foreground after:transition-transform after:duration-300 after:content-[''] ${
      isActive
        ? "text-foreground after:scale-x-100"
        : "text-foreground/40 hover:text-foreground after:scale-x-0 hover:after:scale-x-100"
    }`}
  >
    {label}
  </button>
);

type PostsBrowserProps = {
  posts: WPPost[];
  categories: WPCategory[];
};

export const PostsBrowser = ({ posts, categories }: PostsBrowserProps) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(ALL_CATEGORIES_ID);

  const filteredPosts = useMemo(() => {
    if (selectedCategoryId === ALL_CATEGORIES_ID) return posts;
    return posts.filter((post) => post.categories.includes(selectedCategoryId));
  }, [posts, selectedCategoryId]);

  return (
    <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
      <aside className="flex flex-row flex-wrap gap-x-6 gap-y-2 md:sticky md:top-32 md:w-48 md:flex-shrink-0 md:flex-col md:gap-3">
        <FilterItem
          label="Todos"
          isActive={selectedCategoryId === ALL_CATEGORIES_ID}
          onClick={() => setSelectedCategoryId(ALL_CATEGORIES_ID)}
        />
        {categories.map((category) => (
          <FilterItem
            key={category.id}
            label={category.name}
            isActive={selectedCategoryId === category.id}
            onClick={() => setSelectedCategoryId(category.id)}
          />
        ))}
      </aside>

      <ul
        data-lenis-prevent
        className="flex flex-1 flex-col gap-8 md:max-h-[calc(100vh-16rem)] md:overflow-y-auto"
      >
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <TransitionLink
              href={`/escritos/${post.slug}`}
              className="group flex flex-col gap-3 p-6 border-b border-foreground/30 transition-shadow duration-300 hover:shadow-[0_0_40px_color-mix(in_srgb,var(--color-foreground)_12%,transparent)]"
            >
              <span className="text-sm text-foreground/40">
                {new Date(post.date).toLocaleDateString("es-AR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <h3
                className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold leading-7 text-foreground"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <div
                className="text-md text-foreground/60 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <span className="mt-auto w-fit text-sm uppercase tracking-widest text-foreground/40 transition-colors duration-300 group-hover:text-foreground group-hover:underline">
                Leer
              </span>
            </TransitionLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsBrowser;
