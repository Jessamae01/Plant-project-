export default function MedicinalPage() {
  const plants = [
    { name: "Aloe Vera", use: "Topical", benefit: "Soothes burns and skin irritation", emoji: "🌵" },
    { name: "Echinacea", use: "Tea / Supplement", benefit: "Immune system support", emoji: "🌸" },
    { name: "Chamomile", use: "Tea", benefit: "Calming, sleep aid", emoji: "🌼" },
    { name: "Turmeric", use: "Culinary / Supplement", benefit: "Anti-inflammatory", emoji: "🌿" },
    { name: "Ginger", use: "Culinary / Tea", benefit: "Digestive aid, nausea relief", emoji: "🫚" },
    { name: "St. John's Wort", use: "Supplement", benefit: "Mood support", emoji: "🌻" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">🌿 Medicinal Plants</h1>
        <p className="text-gray-500 mt-2">Nature&apos;s pharmacy — plants with healing properties.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {plants.map((plant) => (
          <div key={plant.name} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-3">{plant.emoji}</div>
            <h3 className="font-semibold text-gray-800 text-lg">{plant.name}</h3>
            <div className="mt-3 space-y-1 text-sm text-gray-500">
              <p>💊 Use: {plant.use}</p>
              <p>✨ Benefit: {plant.benefit}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-8">Disclaimer: Always consult a healthcare professional before using plants medicinally.</p>
    </div>
  );
}
