
import { SiteData } from './types';

export const INITIAL_SITE_DATA: SiteData = {
  hero: {
    title: "Elegance in Every Pour",
    subtitle: "Niche, low-intervention wines curated for the conscious palate in the heart of Hudson Yards.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=2070"
  },
  philosophy: {
    title: "Conscious Drinking",
    content: "Death Ave Wines is born from a commitment to integrity. We champion winemakers who avoid heavy pesticides and embrace low-intervention techniques. Our collection isn't just about taste; it's about the connection between terroir, health, and craftsmanship."
  },
  founder: {
    name: "Michael Tzezailidis",
    bio: "With over 35 years of immersion in NYC’s hospitality scene, Michael Tzezailidis brings an unparalleled depth of experience to Death Ave Wines. His vision merges the gritty industrial history of Chelsea with a modern organic minimalist approach to fine spirits.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974"
  },
  contact: {
    address: "317 10th Avenue, New York, NY 10001",
    phone: "(646) 751-8229",
    email: "info@deathavewines.com",
    hours: {
      "Tue–Sat": "12 PM – 10 PM",
      "Sun": "12 PM – 9 PM",
      "Mon": "Closed"
    }
  },
  seo: {
    home: {
      title: "Death Ave Wines | Boutique Wine Shop Hudson Yards NYC",
      description: "Explore curated low-intervention wines at Death Ave Wines. Boutique shop in Hudson Yards focusing on conscious drinking and artisanal winemakers.",
      keywords: "wine shop nyc, hudson yards wine, natural wine nyc, death ave wines",
      ogImage: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=2070"
    }
  },
  posts: [
    {
      id: '1',
      slug: 'the-art-of-low-intervention',
      title: 'The Art of Low-Intervention',
      excerpt: 'Why minimalist winemaking is the future of the industry.',
      content: 'Low-intervention wine is more than just a trend; it is a return to roots. By allowing the grapes to speak for themselves without chemical additives or excessive manipulation, we discover the true essence of the vineyard...',
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=2070',
      date: '2024-05-15',
      published: true
    }
  ],
  products: [
    {
      id: 'p1',
      name: 'Napa Valley Cabernet Sauvignon',
      vintage: '2021',
      type: 'Red',
      origin: 'California, USA',
      price: 85,
      image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&q=80&w=800',
      description: 'A bold, low-intervention red with notes of blackberry and aged oak.',
      isFeatured: true
    },
    {
      id: 'p2',
      name: 'Sonoma Coast Chardonnay',
      vintage: '2022',
      type: 'White',
      origin: 'California, USA',
      price: 55,
      image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=800',
      description: 'Crisp, bright, and vibrant with minimal oak aging.',
      isFeatured: true
    },
    {
      id: 'p3',
      name: 'Finger Lakes Dry Riesling',
      vintage: '2023',
      type: 'White',
      origin: 'New York, USA',
      price: 42,
      image: 'https://images.unsplash.com/photo-1553361371-9bb22f939d56?auto=format&fit=crop&q=80&w=800',
      description: 'Elegant minerality from the heart of New York.',
      isFeatured: true
    }
  ],
  subscribers: ['tasting@example.com']
};
