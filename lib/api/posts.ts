import type { WPCategory, WPPost } from "@/types/post";

const WP_API_BASE = "https://admin.juanborigen.com/wp-json/wp/v2";
const WP_API_URL = `${WP_API_BASE}/posts`;
const WP_CATEGORIES_URL = `${WP_API_BASE}/categories`;
const MAX_CATEGORIES_PER_PAGE = 100;

const parseJSON = async <T>(res: Response): Promise<T> => {
  const text = await res.text();
  if (!text || !text.trim()) {
    throw new Error("La API devolvió una respuesta vacía");
  }
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error(`JSON inválido: ${text.slice(0, 100)}`);
  }
};

export const getPosts = async (): Promise<WPPost[]> => {
  const res = await fetch(WP_API_URL, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Error al obtener posts: ${res.status}`);
  }

  return parseJSON<WPPost[]>(res);
};

export const getPostBySlug = async (slug: string): Promise<WPPost | null> => {
  const res = await fetch(`${WP_API_URL}?slug=${slug}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Error al obtener post "${slug}": ${res.status}`);
  }

  const posts = await parseJSON<WPPost[]>(res);
  return posts[0] ?? null;
};

export const getCategories = async (): Promise<WPCategory[]> => {
  const res = await fetch(`${WP_CATEGORIES_URL}?per_page=${MAX_CATEGORIES_PER_PAGE}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Error al obtener categorías: ${res.status}`);
  }

  return parseJSON<WPCategory[]>(res);
};
