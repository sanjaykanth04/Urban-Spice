import { DishItem, GalleryItem, ReviewItem } from '../types';

export const SIGNATURE_DISHES: DishItem[] = [
  {
    id: 'sig-1',
    name: 'Butter Chicken',
    description: 'Tender tandoori chicken simmered in a velvety makhani sauce with aromatic fenugreek, cultured butter, and fresh cream.',
    price: 490,
    category: 'Main Course',
    isVeg: false,
    isSignature: true,
    spicyLevel: 1,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    prepTime: '25 mins'
  },
  {
    id: 'sig-2',
    name: 'Chicken Biryani',
    description: 'Aged basmati rice slow-cooked on dum with saffron-infused succulent chicken cuts, caramelized onions, and royal spices.',
    price: 520,
    category: 'Biryani',
    isVeg: false,
    isSignature: true,
    spicyLevel: 2,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    prepTime: '30 mins'
  },
  {
    id: 'sig-3',
    name: 'Paneer Tikka',
    description: 'Handcrafted cottage cheese marinated in Kashmiri chili, hung yogurt, mustard oil, and char-grilled over smoldering coals.',
    price: 420,
    category: 'Vegetarian',
    isVeg: true,
    isSignature: true,
    spicyLevel: 2,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 mins'
  },
  {
    id: 'sig-4',
    name: 'Mutton Rogan Josh',
    description: 'Traditional slow-braised Kashmiri lamb shank bathed in a rich, crimson gravy perfumed with fennel seeds and dry ginger.',
    price: 640,
    category: 'Main Course',
    isVeg: false,
    isSignature: true,
    spicyLevel: 3,
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80',
    prepTime: '35 mins'
  },
  {
    id: 'sig-5',
    name: 'Garlic Naan',
    description: 'Artisanal leavened flatbread baked against blazing clay tandoor walls, brushed generously with garlic butter and fresh coriander.',
    price: 140,
    category: 'Vegetarian',
    isVeg: true,
    isSignature: true,
    spicyLevel: 1,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    prepTime: '10 mins'
  },
  {
    id: 'sig-6',
    name: 'Chocolate Lava Cake',
    description: 'Warm molten dark chocolate sponge infused with green cardamom pods, served alongside Madagascar vanilla bean gelato.',
    price: 360,
    category: 'Desserts',
    isVeg: true,
    isSignature: true,
    spicyLevel: 1,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins'
  }
];

export const FULL_MENU: DishItem[] = [
  // Starters
  {
    id: 'st-1',
    name: 'Tandoori Malai Broccoli',
    description: 'Charred broccoli florets bathed in clotted cream, green cardamom, roasted cumin, and smoked cheddar.',
    price: 390,
    category: 'Starters',
    isVeg: true,
    spicyLevel: 1,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'st-2',
    name: 'Amritsari Crispy Fish',
    description: 'Flaky fresh catch crusted with carom seeds, gram flour, and crushed spices, flash-fried with mint chutney.',
    price: 490,
    category: 'Starters',
    isVeg: false,
    spicyLevel: 2,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'st-3',
    name: 'Dahi Ke Kebab',
    description: 'Silken hung yogurt patties spiced with fresh herbs, bell peppers, and golden breadcrumbs with pomegranate drizzle.',
    price: 380,
    category: 'Starters',
    isVeg: true,
    spicyLevel: 1,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'st-4',
    name: 'Murgh Malai Tikka',
    description: 'Supreme chicken boneless pieces tenderized in cashew nut paste, white pepper, cream, and char-grilled.',
    price: 460,
    category: 'Starters',
    isVeg: false,
    spicyLevel: 1,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80'
  },

  // Main Course
  {
    id: 'mc-1',
    name: 'Butter Chicken',
    description: 'Tender tandoori chicken simmered in a velvety makhani sauce with aromatic fenugreek, cultured butter, and fresh cream.',
    price: 490,
    category: 'Main Course',
    isVeg: false,
    spicyLevel: 1,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mc-2',
    name: 'Mutton Rogan Josh',
    description: 'Traditional slow-braised Kashmiri lamb shank bathed in a rich, crimson gravy perfumed with fennel seeds and dry ginger.',
    price: 640,
    category: 'Main Course',
    isVeg: false,
    spicyLevel: 3,
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mc-3',
    name: 'Dal Makhani',
    description: 'Black lentils slow-cooked overnight over charcoal embers, laced with tomato puree, churned butter, and cream.',
    price: 380,
    category: 'Main Course',
    isVeg: true,
    spicyLevel: 1,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mc-4',
    name: 'Goan Prawn Curry',
    description: 'Jumbo coastal prawns simmered with fresh coconut milk, kokum extract, coriander seeds, and Kashmiri dry chilies.',
    price: 580,
    category: 'Main Course',
    isVeg: false,
    spicyLevel: 2,
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80'
  },

  // Biryani
  {
    id: 'by-1',
    name: 'Chicken Dum Biryani',
    description: 'Aged basmati rice slow-cooked on dum with saffron-infused succulent chicken cuts, caramelized onions, and royal spices.',
    price: 520,
    category: 'Biryani',
    isVeg: false,
    spicyLevel: 2,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'by-2',
    name: 'Awadhi Gosht Biryani',
    description: 'Fragrant saffron basmati rice layered with melt-in-mouth tender goat cuts, rose water essence, and brown onions.',
    price: 660,
    category: 'Biryani',
    isVeg: false,
    spicyLevel: 2,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'by-3',
    name: 'Subz Dum Biryani',
    description: 'Garden fresh vegetables, baby potatoes, and marinated paneer cooked in sealed earthenware with fragrant whole spices.',
    price: 420,
    category: 'Biryani',
    isVeg: true,
    spicyLevel: 1,
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=800&q=80'
  },

  // Vegetarian
  {
    id: 'vg-1',
    name: 'Paneer Butter Masala',
    description: 'Soft cottage cheese cubes cooked in rich tomato cashew gravy finished with kasuri methi and butter.',
    price: 430,
    category: 'Vegetarian',
    isVeg: true,
    spicyLevel: 1,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vg-2',
    name: 'Paneer Tikka',
    description: 'Handcrafted cottage cheese marinated in Kashmiri chili, hung yogurt, mustard oil, and char-grilled over smoldering coals.',
    price: 420,
    category: 'Vegetarian',
    isVeg: true,
    spicyLevel: 2,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vg-3',
    name: 'Garlic Naan & Laccha Paratha',
    description: 'Freshly baked tandoori bread with melted garlic butter alongside flaky layered whole wheat paratha.',
    price: 180,
    category: 'Vegetarian',
    isVeg: true,
    spicyLevel: 1,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vg-4',
    name: 'Palak Paneer Artisanal',
    description: 'Young spinach puree delicately tempered with roasted garlic, cumin, and handmade paneer cubes.',
    price: 410,
    category: 'Vegetarian',
    isVeg: true,
    spicyLevel: 1,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80'
  },

  // Desserts
  {
    id: 'ds-1',
    name: 'Chocolate Lava Cake',
    description: 'Warm molten dark chocolate sponge infused with green cardamom pods, served alongside Madagascar vanilla bean gelato.',
    price: 360,
    category: 'Desserts',
    isVeg: true,
    spicyLevel: 1,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ds-2',
    name: 'Saffron Rasmalai Tres Leches',
    description: 'Spongy cottage cheese patties poached in saffron milk, paired with cardamom soaked sponge cake and pistachio crunch.',
    price: 340,
    category: 'Desserts',
    isVeg: true,
    spicyLevel: 1,
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ds-3',
    name: 'Gulab Jamun Flambé',
    description: 'Golden khoya dumplings soaked in rose syrup, delicately flambéed at your table with old dark rum and silver vark.',
    price: 320,
    category: 'Desserts',
    isVeg: true,
    spicyLevel: 1,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
  },

  // Beverages
  {
    id: 'bv-1',
    name: 'Royal Mango Cardamom Lassi',
    description: 'Churned Alphonso mango pulp blended with probiotic yogurt, crushed green cardamom, and golden saffron threads.',
    price: 240,
    category: 'Beverages',
    isVeg: true,
    spicyLevel: 1,
    image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bv-2',
    name: 'Smoked Masala Chai',
    description: 'Strong Nilgiri black tea brewed with crushed ginger, cloves, cinnamon, served in traditional clay kulhad with smoke aroma.',
    price: 180,
    category: 'Beverages',
    isVeg: true,
    spicyLevel: 1,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bv-3',
    name: 'Kashmiri Kahwa & Rose Cooler',
    description: 'Green tea steeped with saffron, almonds, cinnamon, served chilled with crushed ice and organic rose petals.',
    price: 220,
    category: 'Beverages',
    isVeg: true,
    spicyLevel: 1,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Grand Dining Hall',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
    caption: 'Warm amber chandeliers and charcoal banquettes create an intimate, sophisticated dining sanctuary.'
  },
  {
    id: 'gal-2',
    title: 'Tandoor Clay Oven Artistry',
    category: 'Chef',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=85',
    caption: 'Executive Chef Vikram Oberoi searing marinated tikkas over smoldering natural charcoal.'
  },
  {
    id: 'gal-3',
    title: 'Royal Biryani Pot Opening',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=85',
    caption: 'Unsealing the dough crust releases clouds of saffron, cardamom, and spiced basmati aromas.'
  },
  {
    id: 'gal-4',
    title: 'Private Dining Alcove',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85',
    caption: 'Curated intimate space designed for family celebrations and business banquets.'
  },
  {
    id: 'gal-5',
    title: 'Artisanal Dessert Presentation',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=85',
    caption: 'Handcrafted chocolate lava cake with cardamom notes and gold leaf accents.'
  },
  {
    id: 'gal-6',
    title: 'Spice Grinding & Fresh Aromatics',
    category: 'Chef',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85',
    caption: 'Whole spices hand-roasted daily on heavy cast iron to maximize essential oil release.'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Aishwarya Ramanathan',
    role: 'Food & Wine Critic, Chennai',
    rating: 5,
    comment: 'Urban Spice effortlessly redefines Indian fine dining. The Mutton Rogan Josh had depths of Kashmiri spices I haven’t tasted in years, and the Butter Chicken was sublime. Truly unmatched hospitality.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    date: 'February 2026'
  },
  {
    id: 'rev-2',
    name: 'Marcus Sterling',
    role: 'Gastronomy Traveler',
    rating: 5,
    comment: 'The ambience is moody, warm, and sophisticated. Every dish arrived piping hot with intricate flavors. The Chicken Dum Biryani was fragrant, moist, and perfectly balanced. Five stars all the way!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    date: 'January 2026'
  },
  {
    id: 'rev-3',
    name: 'Dr. Radhika Venkatesh',
    role: 'Regular Guest & Patron',
    rating: 5,
    comment: 'We celebrated our 20th wedding anniversary here and the team made us feel like royalty. The Paneer Tikka was the softest I have ever had, and the Chocolate Lava Cake was a showstopper.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    date: 'December 2025'
  },
  {
    id: 'rev-4',
    name: 'Devanathan Iyer',
    role: 'Architectural Designer',
    rating: 5,
    comment: 'Beyond the delicious cuisine, the interior architecture is phenomenal. Deep charcoal accents, polished brass, and lighting that makes you want to linger for hours. An absolute jewel in Chennai.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    date: 'November 2025'
  }
];

export const RESTAURANT_INFO = {
  name: 'Urban Spice',
  tagline: 'Taste the Tradition. Experience the Flavor.',
  subtitle: 'Authentic flavors, handcrafted dishes, and unforgettable dining experiences.',
  shortStory: 'Founded with a heartfelt devotion to India’s culinary heritage, Urban Spice bridges centuries-old royal recipes with contemporary plating and pristine seasonal ingredients. Every spice blend is dry-roasted in-house, ensuring an unforgettable sensory experience in every bite.',
  address: '123 Food Street, Chennai, Tamil Nadu, India',
  phone: '+91 98765 43210',
  email: 'hello@urbanspice.com',
  hours: {
    weekdays: 'Monday – Friday: 11:00 AM – 10:30 PM',
    weekends: 'Saturday – Sunday: 11:00 AM – 11:30 PM'
  },
  chef: {
    name: 'Chef Vikram Oberoi',
    role: 'Executive Chef & Culinary Director',
    experience: '18+ Years of Culinary Mastery',
    specialization: 'Royal Awadhi, Mughlai & Contemporary Tandoori Heritage',
    bio: 'Trained across premier heritage kitchens of Lucknow and Delhi, Chef Vikram Oberoi brings nearly two decades of Michelin-caliber dedication. His culinary philosophy honors ancestral slow-cooking traditions (Dum Pukht) while embracing modern precision, turning classic regional delicacies into timeless dining masterpieces.',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=85'
  }
};
