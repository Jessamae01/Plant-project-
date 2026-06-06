"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { plants, type Plant } from "@/lib/plants";

type Category = "all" | "indoor" | "outdoor";
type Difficulty = "all" | "Easy" | "Moderate" | "Hard";

const difficultyColor: Record<string, string> = {
  Easy: "text-green-600",
  Moderate: "text-yellow-600",
  Hard: "text-red-500",
};

function PlantCard({ plant }: { plant: Plant }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="text-3xl">{plant.emoji}</span>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            plant.category === "indoor"
              ? "bg-blue-100 text-blue-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {plant.category === "indoor" ? "Indoor" : "Outdoor"}
        </span>
      </div>
      <h3 className="font-semibold text-gray-800 text-base">{plant.name}</h3>
      <p className="text-sm text-gray-500 mt-1 mb-3">{plant.description}</p>
      <div className="space-y-1 text-sm text-gray-500">
        <p>💡 {plant.light}</p>
        <p>💧 {plant.water}</p>
        <p>
          📊 Difficulty:{" "}
          <span className={`font-medium ${difficultyColor[plant.difficulty]}`}>
            {plant.difficulty}
          </span>
        </p>
      </div>
    </div>
  );
}

export default function PlantsPage() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState<Category>("all");
  const [difficulty, setDifficulty] = useState<Difficulty>("all");

  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  const filtered = plants.filter((p) => {
    const q = query.toLowerCase();
    const matchesSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    const matchesCategory = category === "all" || p.category === category;
    const matchesDifficulty = difficulty === "all" || p.difficulty === difficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">🌿 Plant Directory</h1>
        <p className="text-gray-500 mt-1">
          {plants.length} indoor and outdoor plants — search by name, trait, or care need.
        </p>
      </div>

      {/* Search + filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search plants..."
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

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as Category)}
          className="border border-gray-300 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
        >
          <option value="all">All Types</option>
          <option value="indoor">Indoor</option>
          <option value="outdoor">Outdoor</option>
        </select>

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as Difficulty)}
          className="border border-gray-300 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
        >
          <option value="all">Any Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Moderate">Moderate</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-400 mb-4">
        {filtered.length} plant{filtered.length !== 1 ? "s" : ""} found
        {query ? ` for "${query}"` : ""}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((plant) => (
            <PlantCard key={plant.name} plant={plant} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-lg font-medium text-gray-600">No plants found</p>
          <p className="text-sm mt-1">Try a different name or clear the filters.</p>
          <button
            onClick={() => { setQuery(""); setCategory("all"); setDifficulty("all"); }}
            className="mt-4 text-sm text-green-600 hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
