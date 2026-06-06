export default function OutdoorPage() {
  const plants = [
    { name: "Oak Tree", light: "Full sun", water: "Rainfall sufficient", difficulty: "Easy", emoji: "🌳" },
    { name: "Lavender", light: "Full sun", water: "Every 2 weeks", difficulty: "Easy", emoji: "💜" },
    { name: "Rose", light: "Full sun", water: "Twice weekly", difficulty: "Moderate", emoji: "🌹" },
    { name: "Sunflower", light: "Full sun", water: "Weekly", difficulty: "Easy", emoji: "🌻" },
    { name: "Hydrangea", light: "Partial shade", water: "Weekly", difficulty: "Easy", emoji: "💐" },
    { name: "Cherry Tomato", light: "Full sun", water: "Daily in summer", difficulty: "Easy", emoji: "🍅" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">🌳 Outdoor Plants</h1>
        <p className="text-gray-500 mt-2">Transform your garden with these beautiful outdoor plants.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {plants.map((plant) => (
          <div key={plant.name} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-3">{plant.emoji}</div>
            <h3 className="font-semibold text-gray-800 text-lg">{plant.name}</h3>
            <div className="mt-3 space-y-1 text-sm text-gray-500">
              <p>☀️ Light: {plant.light}</p>
              <p>💧 Water: {plant.water}</p>
              <p>📊 Difficulty: <span className={`font-medium ${plant.difficulty === "Easy" ? "text-green-600" : "text-yellow-600"}`}>{plant.difficulty}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
