export default function EdiblePage() {
  const plants = [
    { name: "Basil", harvest: "6-8 weeks", use: "Italian cuisine, pesto", emoji: "🌿" },
    { name: "Mint", harvest: "90 days", use: "Teas, cocktails, desserts", emoji: "🍃" },
    { name: "Rosemary", harvest: "Year-round", use: "Roasts, breads, oils", emoji: "🌱" },
    { name: "Chives", harvest: "30 days", use: "Soups, salads, garnish", emoji: "🪴" },
    { name: "Kale", harvest: "55-75 days", use: "Salads, smoothies, chips", emoji: "🥬" },
    { name: "Cherry Tomato", harvest: "60-80 days", use: "Salads, snacking, roasting", emoji: "🍅" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">🥬 Edible Plants</h1>
        <p className="text-gray-500 mt-2">Grow your own food with these delicious edible plants.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {plants.map((plant) => (
          <div key={plant.name} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-3">{plant.emoji}</div>
            <h3 className="font-semibold text-gray-800 text-lg">{plant.name}</h3>
            <div className="mt-3 space-y-1 text-sm text-gray-500">
              <p>⏱️ Harvest: {plant.harvest}</p>
              <p>🍽️ Use: {plant.use}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
