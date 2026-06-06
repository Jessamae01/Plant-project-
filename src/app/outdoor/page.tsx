"use client";
import { useState } from "react";
import { plants } from "@/lib/plants";
import Link from "next/link";

const outdoorPlants = plants.filter((p) => p.category === "outdoor");

const difficultyColor: Record<string, string> = {
  Easy: "text-green-600",
  Moderate: "text-yellow-600",
  Hard: "text-red-500",
};

export default function OutdoorPage() {
  const [query, setQuery] = useState("");

  const filtered = outdoorPlants.filter((p) => {
    const q = query.toLowerCase();
    return (
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">🌳 Outdoor Plants</h1>
        <p className="text-gray-500 mt-1">
          {outdoorPlants.length} plants for gardens, yards, and landscapes.{" "}
          <Link href="/plants" className="text-green-600 hover:underline text-sm">
            View all plants →
          </Link>
        </p>
      </div>

      <div className="relative max-w-md mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search outdoor plants..."
          className="w-full border border-gray-300 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg leading-none"
          >
            ×
          </button>
        )}
      </div>

      <p className="text-sm text-gray-400 mb-4">
        {filtered.length} plant{filtered.length !== 1 ? "s" : ""} found
      </p>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((plant) => (
            <div
              key={plant.name}
              className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">{plant.emoji}</div>
              <h3 className="font-semibold text-gray-800 text-lg">{plant.name}</h3>
              <p className="text-sm text-gray-500 mt-1 mb-3">{plant.description}</p>
              <div className="space-y-1 text-sm text-gray-500">
                <p>☀️ {plant.light}</p>
                <p>💧 {plant.water}</p>
                <p>
                  📊 Difficulty:{" "}
                  <span className={`font-medium ${difficultyColor[plant.difficulty]}`}>
                    {plant.difficulty}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-sm">No outdoor plants match &quot;{query}&quot;.</p>
          <button
            onClick={() => setQuery("")}
            className="mt-3 text-sm text-green-600 hover:underline"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
