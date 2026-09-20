export interface DishItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Starters' | 'Main Course' | 'Biryani' | 'Vegetarian' | 'Desserts' | 'Beverages';
  isVeg: boolean;
  isSignature?: boolean;
  spicyLevel?: 1 | 2 | 3;
  image: string;
  prepTime?: string;
  calories?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Interior' | 'Food' | 'Chef' | 'Desserts';
  image: string;
  caption: string;
}

export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequest?: string;
}

export interface CartItem {
  dish: DishItem;
  quantity: number;
}
