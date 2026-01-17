
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
}

export interface SitePost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  published: boolean;
}

export interface WineProduct {
  id: string;
  name: string;
  vintage: string;
  type: 'Red' | 'White' | 'Rosé' | 'Sparkling' | 'Orange';
  origin: string;
  price: number;
  image: string;
  description: string;
  isFeatured: boolean;
}

export interface SiteData {
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  philosophy: {
    title: string;
    content: string;
  };
  founder: {
    name: string;
    bio: string;
    image: string;
  };
  contact: {
    address: string;
    phone: string;
    hours: { [key: string]: string };
    email: string;
  };
  seo: {
    [page: string]: SEOConfig;
  };
  posts: SitePost[];
  products: WineProduct[];
  subscribers: string[];
}

export enum AdminTab {
  OVERVIEW = 'Overview',
  PAGES = 'Pages',
  PRODUCTS = 'Products',
  BLOG = 'Blog',
  SEO = 'SEO',
  SUBSCRIBERS = 'Subscribers'
}
