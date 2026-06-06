"use client";
import { useState } from "react";

type Region = "Tropical" | "Mediterranean" | "Temperate" | "Desert" | "Arctic";

const regionPlants: Record<Region, Array<{ name: string; desc: string; emoji: string }>> = {
  Tropical: [
    { name: "Bird of Paradise", desc: "Loves heat and humidity", emoji: "🌺" },
    { name: "Hibiscus", desc: "Vibrant tropical blooms", emoji: "🌸" },
    { name: "Banana Plant", desc: "Fast-growing tropical staple", emoji: "🍌" },
    { name: "Orchid", desc: "Exotic and elegant", emoji: "💮" },
  ],
  Mediterranean: [
    { name: "Lavender", desc: "Drought-tolerant aromatic herb", emoji: "💜" },
    { name: "Olive Tree", desc: "Hardy and long-lived", emoji: "🫒" },
    { name: "Rosemary", desc: "Culinary herb for dry climates", emoji: "🌿" },
    { name: "Bougainvillea", desc: "Colorful drought-tolerant climber", emoji: "🌺" },
  ],
  Temperate: [
    { name: "Apple Tree", desc: "Classic temperate fruit tree", emoji: "🍎" },
    { name: "Rose", desc: "Beloved garden classic", emoji: "🌹" },
    { name: "Hydrangea", desc: "Showy seasonal blooms", emoji: "💐" },
    { name: "Fern", desc: "Lush woodland groundcover", emoji: "🌿" },
  ],
  Desert: [
    { name: "Saguaro Cactus", desc: "Iconic desert survivor", emoji: "🌵" },
    { name: "Aloe Vera", desc: "Succulent with medicinal uses", emoji: "🌵" },
    { name: "Joshua Tree", desc: "Unique Mojave resident", emoji: "🌴" },
    { name: "Agave", desc: "Dramatic architectural plant", emoji: "🪴" },
  ],
  Arctic: [
    { name: "Arctic Willow", desc: "Adapts to freezing conditions", emoji: "🌱" },
    { name: "Bearberry", desc: "Low-growing ground cover", emoji: "🫐" },
    { name: "Saxifrage", desc: "Tough alpine rock plant", emoji: "🌼" },
    { name: "Cotton Grass", desc: "Wetland arctic sedge", emoji: "🌾" },
  ],
};

const regions: Region[] = ["Tropical", "Mediterranean", "Temperate", "Desert", "Arctic"];

const regionEmojis: Record<Region, string> = {
  Tropical: "🏝️",
  Mediterranean: "☀️",
  Temperate: "🌤️",
  Desert: "🏜️",
  Arctic: "❄️",
};

export default function RegionPage() {
  const [selected, setSelected] = useState<Region | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">🗺️ Plants by Region</h1>
        <p className="text-gray-500 mt-2">Select your climate to find plants that thrive in your area.</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setSelected(region)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full border-2 text-sm font-medium transition-all ${
              selected === region
                ? "border-green-600 bg-green-600 text-white"
                : "border-gray-200 text-gray-600 hover:border-green-400"
            }`}
          >
            <span>{regionEmojis[region]}</span>
            {region}
          </button>
        ))}
      </div>

      {selected && (
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Plants for {regionEmojis[selected]} {selected} Climate
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {regionPlants[selected].map((plant) => (
              <div key={plant.name} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{plant.emoji}</div>
                <h3 className="font-semibold text-gray-800">{plant.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{plant.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {!selected && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-5xl mb-4">🌍</p>
          <p className="text-lg">Select a climate region above to see plant recommendations.</p>
        </div>
      )}
    </div>
  );
}
