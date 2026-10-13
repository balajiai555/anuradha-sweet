// Menu Database for Anuradha Sweet and Restaurant
// Location: Kaptanganj, Kushinagar | Hotline: 9609657777

const MENU_CATEGORIES = [
  { id: "all", name: "All Items", icon: "fa-utensils" },
  { id: "mithai", name: "Desi Ghee Mithai", icon: "fa-cubes-stacked" },
  { id: "bengali", name: "Bengali & Milk Sweets", icon: "fa-bowl-rice" },
  { id: "restaurant", name: "Restaurant & Meals", icon: "fa-plate-wheat" },
  { id: "chaat-snacks", name: "Snacks & Chaat", icon: "fa-pepper-hot" },
  { id: "beverages", name: "Beverages & Kulfi", icon: "fa-mug-hot" },
  { id: "hampers", name: "Gift Hampers", icon: "fa-gift" }
];

const MENU_ITEMS = [
  // --- DESI GHEE MITHAI ---
  {
    id: "kaju-katli",
    name: "Kaju Katli (Premium)",
    category: "mithai",
    price: 480, // for 500g base
    description: "Royal cashew diamond fudge made with finest Goan cashews and edible silver leaf. 100% pure.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    badge: "Bestseller",
    options: [
      { label: "250g", price: 250 },
      { label: "500g", price: 480 },
      { label: "1 Kg", price: 920 }
    ],
    isVeg: true,
    rating: 4.9
  },
  {
    id: "motichoor-laddu",
    name: "Pure Ghee Motichoor Laddu",
    category: "mithai",
    price: 220,
    description: "Tiny gram flour pearls soaked in saffron sugar syrup and fried in pure desi ghee. Melts in mouth.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    badge: "Customer Favorite",
    options: [
      { label: "250g", price: 120 },
      { label: "500g", price: 220 },
      { label: "1 Kg", price: 420 }
    ],
    isVeg: true,
    rating: 4.8
  },
  {
    id: "gulab-jamun",
    name: "Shahi Desi Ghee Gulab Jamun",
    category: "mithai",
    price: 180,
    description: "Deep-fried mawa and paneer spheres immersed in warm rose and green cardamom scented sugar syrup.",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=700&q=80",
    badge: "Must Try",
    options: [
      { label: "4 Pcs", price: 100 },
      { label: "500g (Approx 10 pcs)", price: 180 },
      { label: "1 Kg", price: 350 }
    ],
    isVeg: true,
    rating: 4.9
  },
  {
    id: "besan-laddu",
    name: "Desi Ghee Besan Laddu",
    category: "mithai",
    price: 210,
    description: "Slow-roasted coarse chickpea flour infused with fragrant cardamom, crunchy dry fruits & pure ghee.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80",
    badge: "",
    options: [
      { label: "250g", price: 110 },
      { label: "500g", price: 210 },
      { label: "1 Kg", price: 400 }
    ],
    isVeg: true,
    rating: 4.7
  },
  {
    id: "milk-cake",
    name: "Caramelized Kalakand / Milk Cake",
    category: "mithai",
    price: 260,
    description: "Slowly simmered whole milk grains caramelized to two-tone perfection with rich nutty notes.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80",
    badge: "Classic",
    options: [
      { label: "250g", price: 140 },
      { label: "500g", price: 260 },
      { label: "1 Kg", price: 500 }
    ],
    isVeg: true,
    rating: 4.8
  },
  {
    id: "kaju-pista-roll",
    name: "Luxury Kaju Pista Roll",
    category: "mithai",
    price: 520,
    description: "Handcrafted cashew cylinders stuffed with crushed Iranian pistachios, saffron and silver vark.",
    image: "https://images.unsplash.com/photo-1505253758473-96b3015f21c9?auto=format&fit=crop&w=700&q=80",
    badge: "Luxury",
    options: [
      { label: "250g", price: 280 },
      { label: "500g", price: 520 },
      { label: "1 Kg", price: 990 }
    ],
    isVeg: true,
    rating: 4.9
  },

  // --- BENGALI & MILK SWEETS ---
  {
    id: "spongy-rasgulla",
    name: "Kolkata Spongy Rasgulla",
    category: "bengali",
    price: 160,
    description: "Fresh cottage cheese chenna dumplings poached in light cardamom sugar syrup. Exceptionally soft.",
    image: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?auto=format&fit=crop&w=700&q=80",
    badge: "Fresh Daily",
    options: [
      { label: "4 Pcs", price: 90 },
      { label: "500g", price: 160 },
      { label: "1 Kg", price: 300 }
    ],
    isVeg: true,
    rating: 4.8
  },
  {
    id: "kesar-rasmalai",
    name: "Shahi Kesar Pista Rasmalai",
    category: "bengali",
    price: 120,
    description: "Melt-in-mouth flattened chenna discs submerged in chilled saffron infused thickened rabri.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80",
    badge: "Chef's Special",
    options: [
      { label: "2 Pcs", price: 120 },
      { label: "4 Pcs", price: 230 },
      { label: "1 Kg Bowl", price: 540 }
    ],
    isVeg: true,
    rating: 5.0
  },
  {
    id: "rajbhog",
    name: "Kashmiri Kesar Rajbhog",
    category: "bengali",
    price: 180,
    description: "King-sized saffron rasgullas generously stuffed with pistachios, almonds and mawa.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=80",
    badge: "",
    options: [
      { label: "500g", price: 180 },
      { label: "1 Kg", price: 350 }
    ],
    isVeg: true,
    rating: 4.7
  },
  {
    id: "malai-cham-cham",
    name: "Malai Cham Cham",
    category: "bengali",
    price: 240,
    description: "Traditional Bengali sweet made from chenna, stuffed with creamy mawa and garnished with silver foil.",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=700&q=80",
    badge: "",
    options: [
      { label: "500g", price: 240 },
      { label: "1 Kg", price: 460 }
    ],
    isVeg: true,
    rating: 4.8
  },

  // --- RESTAURANT & MEALS ---
  {
    id: "anuradha-special-thali",
    name: "Anuradha Royal Deluxe Thali",
    category: "restaurant",
    price: 240,
    description: "Paneer Butter Masala, Dal Makhani, Seasonal Veg, Jeera Rice, 2 Butter Naan / Tandoori Roti, Raita, Salad & Sweet.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=700&q=80",
    badge: "Top Seller",
    options: [
      { label: "1 Full Thali", price: 240 }
    ],
    isVeg: true,
    rating: 4.9
  },
  {
    id: "chole-bhature",
    name: "Special Punjabi Chole Bhature",
    category: "restaurant",
    price: 130,
    description: "Two jumbo fluffy golden bhature served with rich Amritsari spiced chole, pickled onions and fried chili.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80",
    badge: "Morning & Evening",
    options: [
      { label: "1 Plate (2 Bhature + Chole)", price: 130 }
    ],
    isVeg: true,
    rating: 4.9
  },
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    category: "restaurant",
    price: 190,
    description: "Succulent fresh cottage cheese cubes cooked in a rich, buttery tomato-cashew makhani gravy.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
    badge: "",
    options: [
      { label: "Half (300ml)", price: 120 },
      { label: "Full (500ml)", price: 190 }
    ],
    isVeg: true,
    rating: 4.8
  },
  {
    id: "pav-bhaji",
    name: "Butter Pav Bhaji (Special)",
    category: "restaurant",
    price: 110,
    description: "Aromatic spicy vegetable mash cooked on iron tawa with generous butter, served with 2 soft toasted pavs.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=80",
    badge: "Street Special",
    options: [
      { label: "1 Plate (Bhaji + 2 Pav)", price: 110 },
      { label: "Extra Pav (2 Pcs)", price: 35 }
    ],
    isVeg: true,
    rating: 4.7
  },
  {
    id: "masala-dosa",
    name: "South Indian Masala Dosa",
    category: "restaurant",
    price: 120,
    description: "Crispy fermented rice and lentil crepe rolled with spiced potato masala, served with piping hot sambar & fresh coconut chutney.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80",
    badge: "Crispy",
    options: [
      { label: "1 Plate", price: 120 }
    ],
    isVeg: true,
    rating: 4.8
  },

  // --- CHAAT & SNACKS ---
  {
    id: "khasta-samosa",
    name: "Desi Ghee Khasta Samosa",
    category: "chaat-snacks",
    price: 30,
    description: "Flaky crispy triangular pastry stuffed with spiced potatoes, green peas and whole spices. Served with 2 chutneys.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    badge: "All-Time Hit",
    options: [
      { label: "2 Pcs with Chutney", price: 30 },
      { label: "4 Pcs with Chutney", price: 60 }
    ],
    isVeg: true,
    rating: 4.9
  },
  {
    id: "aloo-tikki-chaat",
    name: "Kurkuri Aloo Tikki Chaat",
    category: "chaat-snacks",
    price: 70,
    description: "Golden pan-crisped potato cutlets smothered in spiced ragda chole, sweetened yogurt, tamarind and coriander chutney.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80",
    badge: "Chatpata",
    options: [
      { label: "1 Plate", price: 70 }
    ],
    isVeg: true,
    rating: 4.9
  },
  {
    id: "khaman-dhokla",
    name: "Spongy Nylon Khaman Dhokla",
    category: "chaat-snacks",
    price: 80,
    description: "Steamed fluffy gram flour cakes tempered with mustard seeds, curry leaves, green chilies and fresh coriander.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    badge: "Light & Healthy",
    options: [
      { label: "250g", price: 50 },
      { label: "500g", price: 80 }
    ],
    isVeg: true,
    rating: 4.7
  },
  {
    id: "khasta-kachori-sabzi",
    name: "Khasta Kachori with Hing Aloo Sabzi",
    category: "chaat-snacks",
    price: 60,
    description: "Crisp puffed kachoris with spiced lentil stuffing served with traditional Uttar Pradesh style spicy potato gravy.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80",
    badge: "Breakfast Favorite",
    options: [
      { label: "2 Pcs with Aloo Sabzi", price: 60 }
    ],
    isVeg: true,
    rating: 4.8
  },

  // --- BEVERAGES & KULFI ---
  {
    id: "shahi-kesar-lassi",
    name: "Matka Kesar Pista Lassi",
    category: "beverages",
    price: 70,
    description: "Thick hand-churned sweet yogurt served in an earthen clay kulhad, crowned with thick malai, kesar and slivered pistachios.",
    image: "https://images.unsplash.com/photo-1571006682878-831e7f60f649?auto=format&fit=crop&w=700&q=80",
    badge: "Signature Drink",
    options: [
      { label: "1 Clay Kulhad (300ml)", price: 70 }
    ],
    isVeg: true,
    rating: 5.0
  },
  {
    id: "badam-milk",
    name: "Chilled Shahi Badam Milk",
    category: "beverages",
    price: 60,
    description: "Slow-simmered whole milk infused with pure saffron, crushed almonds and cardamom. Served chilled.",
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=700&q=80",
    badge: "",
    options: [
      { label: "1 Glass (250ml)", price: 60 }
    ],
    isVeg: true,
    rating: 4.8
  },
  {
    id: "rabdi-kulfi-falooda",
    name: "Traditional Rabdi Kulfi Falooda",
    category: "beverages",
    price: 90,
    description: "Dense creamy rabdi kulfi sliced and layered with rose syrup, falooda noodles, basil seeds and chopped nuts.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80",
    badge: "Summer Delight",
    options: [
      { label: "1 Plate", price: 90 }
    ],
    isVeg: true,
    rating: 4.9
  },

  // --- GIFT HAMPERS ---
  {
    id: "shahi-utsav-box",
    name: "Shahi Utsav Celebration Box (1 Kg)",
    category: "hampers",
    price: 780,
    description: "A luxury embossed gift box containing Kaju Katli, Mawa Peda, Motichoor Laddu & Milk Cake. Perfect for festivals & weddings.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    badge: "Festive Special",
    options: [
      { label: "1 Kg Royal Gift Box", price: 780 },
      { label: "2 Kg Grand Celebration Box", price: 1499 }
    ],
    isVeg: true,
    rating: 4.9
  },
  {
    id: "royal-dryfruit-sweet-hamper",
    name: "Grand Dry Fruit & Mithai Hamper",
    category: "hampers",
    price: 1150,
    description: "Exclusive wooden-finish hamper pack: Premium Roasted Cashews, California Almonds, Kaju Pista Rolls & Kesar Katli.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    badge: "Exclusive",
    options: [
      { label: "Standard Hamper (1 Kg)", price: 1150 },
      { label: "VVIP Luxury Hamper (2 Kg)", price: 2199 }
    ],
    isVeg: true,
    rating: 5.0
  }
];
