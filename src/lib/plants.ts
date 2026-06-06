export type Plant = {
  name: string;
  category: "indoor" | "outdoor";
  emoji: string;
  light: string;
  water: string;
  difficulty: "Easy" | "Moderate" | "Hard";
  description: string;
  tags: string[];
};

export const plants: Plant[] = [
  // Indoor
  { name: "Monstera Deliciosa", category: "indoor", emoji: "🌿", light: "Bright indirect", water: "Weekly", difficulty: "Easy", description: "Iconic split-leaf tropical plant. Great for adding a lush, dramatic look indoors.", tags: ["tropical", "large", "popular"] },
  { name: "Snake Plant", category: "indoor", emoji: "🪴", light: "Low to bright", water: "Every 2–3 weeks", difficulty: "Easy", description: "Nearly indestructible. Tolerates low light and irregular watering.", tags: ["low light", "drought tolerant", "beginner"] },
  { name: "Fiddle Leaf Fig", category: "indoor", emoji: "🌱", light: "Bright indirect", water: "Weekly", difficulty: "Moderate", description: "Trendy statement plant with large violin-shaped leaves. Needs consistency.", tags: ["large", "trendy"] },
  { name: "Peace Lily", category: "indoor", emoji: "🌸", light: "Low light", water: "Weekly", difficulty: "Easy", description: "One of the best low-light bloomers. White flowers and glossy foliage.", tags: ["low light", "flowering", "beginner"] },
  { name: "Pothos", category: "indoor", emoji: "🍃", light: "Low to medium", water: "Weekly", difficulty: "Easy", description: "Fast-growing trailing vine perfect for shelves or hanging baskets.", tags: ["trailing", "low light", "beginner"] },
  { name: "ZZ Plant", category: "indoor", emoji: "🌿", light: "Low to bright", water: "Every 3–4 weeks", difficulty: "Easy", description: "Waxy, dark green leaves. Thrives on neglect and handles low light well.", tags: ["drought tolerant", "low light", "beginner"] },
  { name: "Rubber Plant", category: "indoor", emoji: "🌳", light: "Bright indirect", water: "Every 1–2 weeks", difficulty: "Easy", description: "Bold glossy leaves in deep green or burgundy. A classic indoor tree.", tags: ["large", "classic"] },
  { name: "Spider Plant", category: "indoor", emoji: "🕷️", light: "Indirect light", water: "Weekly", difficulty: "Easy", description: "Produces arching leaves and trailing babies. Excellent air purifier.", tags: ["pet safe", "air purifier", "beginner"] },
  { name: "Aloe Vera", category: "indoor", emoji: "🌵", light: "Bright direct", water: "Every 3 weeks", difficulty: "Easy", description: "Succulent with gel-filled leaves. Keep on a sunny windowsill.", tags: ["succulent", "medicinal", "drought tolerant"] },
  { name: "Orchid", category: "indoor", emoji: "💮", light: "Bright indirect", water: "Weekly", difficulty: "Moderate", description: "Elegant blooms that last for months. Needs good light and careful watering.", tags: ["flowering", "elegant"] },
  { name: "Chinese Evergreen", category: "indoor", emoji: "🌿", light: "Low to medium", water: "Every 1–2 weeks", difficulty: "Easy", description: "Colorful patterned leaves. One of the most adaptable houseplants.", tags: ["low light", "colorful", "beginner"] },
  { name: "Boston Fern", category: "indoor", emoji: "🌱", light: "Indirect bright", water: "Keep moist", difficulty: "Moderate", description: "Lush, feathery fronds. Loves humidity — great for bathrooms.", tags: ["pet safe", "humidity", "lush"] },
  { name: "Calathea", category: "indoor", emoji: "🍃", light: "Low to medium", water: "Weekly", difficulty: "Hard", description: "Stunning patterned leaves that fold up at night. Needs humidity.", tags: ["patterned", "humidity", "decorative"] },
  { name: "Dracaena", category: "indoor", emoji: "🪴", light: "Low to bright indirect", water: "Every 2 weeks", difficulty: "Easy", description: "Spiky architectural plant available in many varieties. Very forgiving.", tags: ["low light", "architectural", "beginner"] },
  { name: "Heartleaf Philodendron", category: "indoor", emoji: "💚", light: "Low to medium", water: "Weekly", difficulty: "Easy", description: "Vining plant with heart-shaped leaves. Grows quickly and looks great trailing.", tags: ["trailing", "low light", "beginner"] },
  { name: "Bird of Paradise", category: "indoor", emoji: "🌺", light: "Bright direct", water: "Weekly", difficulty: "Moderate", description: "Dramatic large leaves. Needs lots of sunlight to thrive indoors.", tags: ["large", "tropical", "dramatic"] },

  // Outdoor
  { name: "Lavender", category: "outdoor", emoji: "💜", light: "Full sun", water: "Every 2 weeks", difficulty: "Easy", description: "Fragrant purple spikes beloved by pollinators. Drought-tolerant once established.", tags: ["fragrant", "drought tolerant", "pollinators"] },
  { name: "Rose", category: "outdoor", emoji: "🌹", light: "Full sun", water: "Twice weekly", difficulty: "Moderate", description: "Classic garden flower with hundreds of varieties. Rewarding but needs attention.", tags: ["flowering", "classic", "fragrant"] },
  { name: "Sunflower", category: "outdoor", emoji: "🌻", light: "Full sun", water: "Weekly", difficulty: "Easy", description: "Cheerful annual that grows fast and tall. Great for cutting gardens.", tags: ["annual", "tall", "pollinator"] },
  { name: "Hydrangea", category: "outdoor", emoji: "💐", light: "Partial shade", water: "Weekly", difficulty: "Easy", description: "Big showy blooms in blue, pink, or white. Colour depends on soil pH.", tags: ["flowering", "shade tolerant", "showy"] },
  { name: "Oak Tree", category: "outdoor", emoji: "🌳", light: "Full sun", water: "Rainfall sufficient", difficulty: "Easy", description: "Long-lived native tree. Excellent wildlife habitat and shade provider.", tags: ["tree", "native", "shade"] },
  { name: "Tomato", category: "outdoor", emoji: "🍅", light: "Full sun", water: "Daily in summer", difficulty: "Moderate", description: "The ultimate edible garden plant. Needs regular watering and feeding.", tags: ["edible", "vegetable", "popular"] },
  { name: "Marigold", category: "outdoor", emoji: "🌼", light: "Full sun", water: "Weekly", difficulty: "Easy", description: "Cheerful orange and yellow blooms that deter pests. Brilliant companion plant.", tags: ["annual", "pest control", "companion"] },
  { name: "Japanese Maple", category: "outdoor", emoji: "🍁", light: "Partial shade", water: "Weekly", difficulty: "Easy", description: "Stunning ornamental tree with delicate, colourful foliage.", tags: ["tree", "ornamental", "autumn colour"] },
  { name: "Boxwood", category: "outdoor", emoji: "🌿", light: "Full to partial sun", water: "Weekly", difficulty: "Easy", description: "Dense evergreen shrub ideal for hedges and topiary.", tags: ["evergreen", "hedge", "formal"] },
  { name: "Daffodil", category: "outdoor", emoji: "🌼", light: "Full to partial sun", water: "Rainfall sufficient", difficulty: "Easy", description: "Spring-flowering bulb. Plant in autumn for bright yellow blooms.", tags: ["bulb", "spring", "easy"] },
  { name: "Clematis", category: "outdoor", emoji: "🌸", light: "Full sun", water: "Weekly", difficulty: "Moderate", description: "Vigorous climbing vine with large showy flowers. Perfect for fences and trellises.", tags: ["climber", "flowering", "fence"] },
  { name: "Hostas", category: "outdoor", emoji: "🍃", light: "Shade to partial shade", water: "Weekly", difficulty: "Easy", description: "Bold foliage plants that thrive in shade. Come in dozens of varieties.", tags: ["shade", "foliage", "low maintenance"] },
  { name: "Peony", category: "outdoor", emoji: "🌸", light: "Full sun", water: "Weekly", difficulty: "Easy", description: "Lush, fragrant blooms that return year after year. Long-lived perennial.", tags: ["perennial", "fragrant", "flowering"] },
  { name: "Black-eyed Susan", category: "outdoor", emoji: "🌻", light: "Full sun", water: "Drought tolerant", difficulty: "Easy", description: "Native wildflower with golden petals and dark centres. Attracts butterflies.", tags: ["native", "wildflower", "pollinator"] },
  { name: "Butterfly Bush", category: "outdoor", emoji: "🦋", light: "Full sun", water: "Weekly", difficulty: "Easy", description: "Fast-growing shrub covered in fragrant flower spikes that attract butterflies.", tags: ["shrub", "pollinator", "fragrant"] },
];
