const LITESHOW_API_URL = import.meta.env.LITESHOW_API_URL || 'https://api.liteshow.io';
const PROJECT_SLUG = import.meta.env.LITESHOW_PROJECT_SLUG;

export interface Page {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  metaDescription: string | null;
  ogImage: string | null;
  blocks: any[];
}

export interface SiteSettings {
  siteTitle: string | null;
  siteDescription: string | null;
  faviconUrl: string | null;
}

export async function getAllPages(): Promise<Page[]> {
  try {
    const response = await fetch(`${LITESHOW_API_URL}/public/${PROJECT_SLUG}/pages`);
    if (!response.ok) {
      console.error('Failed to fetch pages:', response.statusText);
      return [];
    }
    const data = await response.json();
    return data.pages || [];
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const response = await fetch(`${LITESHOW_API_URL}/public/${PROJECT_SLUG}/pages/${slug}`);
    if (!response.ok) {
      console.error(`Failed to fetch page ${slug}:`, response.statusText);
      return null;
    }
    const data = await response.json();
    return data.page;
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    return null;
  }
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const response = await fetch(`${LITESHOW_API_URL}/public/${PROJECT_SLUG}/settings`);
    if (!response.ok) {
      console.error('Failed to fetch site settings:', response.statusText);
      return null;
    }
    const data = await response.json();
    return data.settings;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}
