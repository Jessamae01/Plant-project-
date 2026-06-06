export default function PetSafetyPage() {
  const safePlants = [
    { name: "Spider Plant", pets: "Dogs & Cats", emoji: "🌿" },
    { name: "Boston Fern", pets: "Dogs & Cats", emoji: "🌱" },
    { name: "Bamboo Palm", pets: "Dogs & Cats", emoji: "🎋" },
    { name: "African Violet", pets: "Dogs & Cats", emoji: "💜" },
    { name: "Catnip", pets: "Cats (safe, stimulating)", emoji: "🌿" },
    { name: "Basil", pets: "Dogs & Cats", emoji: "🍃" },
  ];

  const toxicPlants = [
    { name: "Lily", pets: "Cats (severe kidney failure)", emoji: "🌷" },
    { name: "Sago Palm", pets: "Dogs & Cats (liver failure)", emoji: "🌴" },
    { name: "Oleander", pets: "Dogs & Cats (cardiac)", emoji: "🌸" },
    { name: "Azalea", pets: "Dogs & Cats", emoji: "🌺" },
    { name: "Foxglove", pets: "Dogs & Cats (cardiac)", emoji: "🌼" },
    { name: "Dieffenbachia", pets: "Dogs & Cats (mouth irritation)", emoji: "🪴" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">🐾 Pet Safety Guide</h1>
        <p className="text-gray-500 mt-2">Know which plants are safe or dangerous for your furry friends.</p>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-green-700 mb-4">✅ Safe Plants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {safePlants.map((plant) => (
            <div key={plant.name} className="border border-green-200 bg-green-50 rounded-xl p-5">
              <div className="text-3xl mb-2">{plant.emoji}</div>
              <h3 className="font-semibold text-gray-800">{plant.name}</h3>
              <p className="text-sm text-green-700 mt-1">🐾 {plant.pets}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-red-700 mb-4">⚠️ Toxic Plants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {toxicPlants.map((plant) => (
            <div key={plant.name} className="border border-red-200 bg-red-50 rounded-xl p-5">
              <div className="text-3xl mb-2">{plant.emoji}</div>
              <h3 className="font-semibold text-gray-800">{plant.name}</h3>
              <p className="text-sm text-red-700 mt-1">⚠️ {plant.pets}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
