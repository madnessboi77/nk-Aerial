export type Project = {
  slug: string;
  title: string;
  type: "Residential" | "Commercial" | "Mixed-use";
  status: "Ongoing" | "Completed" | "Upcoming";
  location: string;
  heroImage: string;
  gallery: string[];
  shortDescription: string;
  overview: string;
  highlights: string[];
  details: {
    label: string;
    value: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: 'aerial-noor',
    title: 'Aerial Noor',
    type: 'Residential',
    status: 'Ongoing',
    location: 'Dhaka, Bangladesh',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    ],
    shortDescription: 'A contemporary residential development designed for comfortable city living with a clean modern elevation.',
    overview: 'Aerial Noor reflects the core vision of Aerial Properties Limited: practical planning, refined architecture, and dependable residential value. The project is designed to offer a calm urban living experience with a modern facade, bright openings, and functional spaces suited for everyday family life.',
    highlights: [
      'Contemporary residential architecture',
      'Practical apartment planning',
      'Bright facade with modern detailing',
      'Designed for comfortable urban living',
      'Quality-focused development approach'
    ],
    details: [
      { label: 'Location', value: 'Dhaka, Bangladesh' },
      { label: 'Land Area', value: 'To be updated' },
      { label: 'Apartment Size', value: 'To be updated' },
      { label: 'Number of Floors', value: 'To be updated' },
      { label: 'Units', value: 'To be updated' },
      { label: 'Handover', value: 'To be updated' }
    ]
  },
  {
    slug: 'aerial-chowdhury-heights',
    title: 'Aerial Chowdhury Heights',
    type: 'Residential',
    status: 'Ongoing',
    location: 'Dhaka, Bangladesh',
    heroImage: 'https://images.unsplash.com/photo-1430285561322-7808604715df?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1920&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80',
    ],
    shortDescription: 'A slim, modern residential tower with a clean facade, vertical composition, and efficient urban planning.',
    overview: 'Aerial Chowdhury Heights presents a modern apartment concept shaped for dense city life. Its vertical design, clean exterior lines, and carefully organized frontage give the project a polished identity while supporting practical residential use.',
    highlights: [
      'Elegant vertical elevation',
      'Efficient use of urban land',
      'Modern balconies and window rhythm',
      'Residential planning focused on comfort',
      'Clean architectural identity'
    ],
    details: [
      { label: 'Location', value: 'Dhaka, Bangladesh' },
      { label: 'Land Area', value: 'To be updated' },
      { label: 'Apartment Size', value: 'To be updated' },
      { label: 'Number of Floors', value: 'To be updated' },
      { label: 'Units', value: 'To be updated' },
      { label: 'Handover', value: 'To be updated' }
    ]
  },
  {
    slug: 'aerial-zinia',
    title: 'Aerial Zinia',
    type: 'Residential',
    status: 'Ongoing',
    location: 'Dhaka, Bangladesh',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    ],
    shortDescription: 'A refined residential building with warm lighting, rooftop greenery, and a calm contemporary character.',
    overview: 'Aerial Zinia is designed as a balanced urban residence with a soft architectural presence. The building combines clean geometry, warm facade lighting, rooftop greenery, and practical apartment planning to create a welcoming address for modern families.',
    highlights: [
      'Warm and welcoming exterior design',
      'Rooftop greenery',
      'Residential balconies',
      'Soft lighting features',
      'Family-focused living environment'
    ],
    details: [
      { label: 'Location', value: 'Dhaka, Bangladesh' },
      { label: 'Land Area', value: 'To be updated' },
      { label: 'Apartment Size', value: 'To be updated' },
      { label: 'Number of Floors', value: 'To be updated' },
      { label: 'Units', value: 'To be updated' },
      { label: 'Handover', value: 'To be updated' }
    ]
  },
  {
    slug: 'aerial-sn-viola',
    title: 'Aerial SN Viola',
    type: 'Residential',
    status: 'Ongoing',
    location: 'Dhaka, Bangladesh',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1430285561322-7808604715df?w=1920&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1920&q=80',
    ],
    shortDescription: 'A premium residential project with bold geometry, green balconies, and a distinctive modern profile.',
    overview: 'Aerial SN Viola is a visually striking residential development that combines strong architectural forms with greenery and open balcony elements. The design emphasizes a fresh urban identity while maintaining practical comfort for residents.',
    highlights: [
      'Bold architectural massing',
      'Green balcony features',
      'Premium residential appearance',
      'Strong street presence',
      'Modern city-living focus'
    ],
    details: [
      { label: 'Location', value: 'Dhaka, Bangladesh' },
      { label: 'Land Area', value: 'To be updated' },
      { label: 'Apartment Size', value: 'To be updated' },
      { label: 'Number of Floors', value: 'To be updated' },
      { label: 'Units', value: 'To be updated' },
      { label: 'Handover', value: 'To be updated' }
    ]
  },
  {
    slug: 'aerial-ymca',
    title: 'Aerial YMCA',
    type: 'Commercial',
    status: 'Ongoing',
    location: 'Dhaka, Bangladesh',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80',
    ],
    shortDescription: 'A contemporary commercial development with a glass-focused facade and strong corporate presence.',
    overview: 'Aerial YMCA is planned as a modern commercial property with a transparent glass facade, vertical architectural expression, and a professional urban character. The project is designed to support business visibility, accessibility, and a strong first impression.',
    highlights: [
      'Commercial building design',
      'Glass facade expression',
      'Strong corporate identity',
      'Urban business-friendly presence',
      'Modern exterior composition'
    ],
    details: [
      { label: 'Location', value: 'Dhaka, Bangladesh' },
      { label: 'Land Area', value: 'To be updated' },
      { label: 'Floor Area', value: 'To be updated' },
      { label: 'Number of Floors', value: 'To be updated' },
      { label: 'Elevators', value: 'To be updated' },
      { label: 'Handover', value: 'To be updated' }
    ]
  },
  {
    slug: 'aerial-legend',
    title: 'Aerial Legend',
    type: 'Residential',
    status: 'Ongoing',
    location: 'Dhaka, Bangladesh',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
      'https://images.unsplash.com/photo-1430285561322-7808604715df?w=1920&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
    ],
    shortDescription: 'A high-rise residential development with a dramatic evening presence and elegant facade lighting.',
    overview: 'Aerial Legend brings a premium residential character through height, lighting, and architectural detail. The project is designed to create a strong visual identity while supporting comfortable apartment living.',
    highlights: [
      'High-rise residential form',
      'Evening lighting character',
      'Premium facade language',
      'Balcony-focused elevation',
      'Designed for modern families'
    ],
    details: [
      { label: 'Location', value: 'Dhaka, Bangladesh' },
      { label: 'Land Area', value: 'To be updated' },
      { label: 'Apartment Size', value: 'To be updated' },
      { label: 'Number of Floors', value: 'To be updated' },
      { label: 'Units', value: 'To be updated' },
      { label: 'Handover', value: 'To be updated' }
    ]
  },
  {
    slug: 'aerial-kader-crown',
    title: 'Aerial Kader Crown',
    type: 'Residential',
    status: 'Ongoing',
    location: 'Dhaka, Bangladesh',
    heroImage: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    ],
    shortDescription: 'A modern residential development with a balanced facade, greenery, and a refined urban identity.',
    overview: 'Aerial Kader Crown is designed as a contemporary residential address with a strong sense of arrival. The project combines clean architectural lines, planted edges, and practical apartment planning to create a confident urban living environment.',
    highlights: [
      'Contemporary residential tower',
      'Green facade accents',
      'Strong entrance experience',
      'Modern apartment planning',
      'Day and night visual presence'
    ],
    details: [
      { label: 'Location', value: 'Dhaka, Bangladesh' },
      { label: 'Land Area', value: 'To be updated' },
      { label: 'Apartment Size', value: 'To be updated' },
      { label: 'Number of Floors', value: 'To be updated' },
      { label: 'Units', value: 'To be updated' },
      { label: 'Handover', value: 'To be updated' }
    ]
  },
  {
    slug: 'aerial-ixora',
    title: 'Aerial Ixora',
    type: 'Residential',
    status: 'Ongoing',
    location: 'Dhaka, Bangladesh',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
      'https://images.unsplash.com/photo-1430285561322-7808604715df?w=1920&q=80',
    ],
    shortDescription: 'A contemporary apartment project with a bright facade, vertical lines, and practical family-focused spaces.',
    overview: 'Aerial Ixora reflects a clean and efficient residential design approach. With its modern exterior treatment, balconies, and urban frontage, the project is shaped to provide practical living spaces within a refined architectural envelope.',
    highlights: [
      'Bright residential facade',
      'Vertical architectural rhythm',
      'Balcony and window detailing',
      'Practical family living',
      'Quality-focused project planning'
    ],
    details: [
      { label: 'Location', value: 'Dhaka, Bangladesh' },
      { label: 'Land Area', value: 'To be updated' },
      { label: 'Apartment Size', value: 'To be updated' },
      { label: 'Number of Floors', value: 'To be updated' },
      { label: 'Units', value: 'To be updated' },
      { label: 'Handover', value: 'To be updated' }
    ]
  },
  {
    slug: 'aerial-kr-heights',
    title: 'Aerial KR Heights',
    type: 'Residential',
    status: 'Ongoing',
    location: 'Dhaka, Bangladesh',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1920&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80',
    ],
    shortDescription: 'A modern high-rise residential project with a clean elevation and strong urban presence.',
    overview: 'Aerial KR Heights is a residential development designed around vertical living, modern exterior details, and efficient apartment planning. Its facade uses clean lines and balanced proportions to create a confident city address.',
    highlights: [
      'High-rise residential development',
      'Modern facade composition',
      'Efficient apartment layout approach',
      'Urban residential identity',
      'Designed for long-term value'
    ],
    details: [
      { label: 'Location', value: 'Dhaka, Bangladesh' },
      { label: 'Land Area', value: 'To be updated' },
      { label: 'Apartment Size', value: 'To be updated' },
      { label: 'Number of Floors', value: 'To be updated' },
      { label: 'Units', value: 'To be updated' },
      { label: 'Handover', value: 'To be updated' }
    ]
  }
];
