import { notFound } from "next/navigation";
import Link from "next/link";
import { plants, getPlantBySlug } from "@/lib/plants";
import type { Metadata } from "next";

export function generateStaticParams() {
  return plants.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const plant = getPlantBySlug(params.slug);
  if (!plant) return { title: "Plant not found" };
  return {
    title: `${plant.name} — Verdure`,
    description: plant.description,
  };
}

const difficultyColor: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Moderate: "bg-yellow-100 text-yellow-700",
  Hard: "bg-red-100 text-red-700",
};

export default function PlantDetailPage({ params }: { params: { slug: string } }) {
  const plant = getPlantBySlug(params.slug);
  if (!plant) notFound();

  const related = plants
    .filter((p) => p.slug !== plant.slug && p.category === plant.category)
    .slice(0, 4);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/plants" className="hover:text-green-600 transition-colors">
          All Plants
        </Link>
        <span>/</span>
        <Link
          href={`/${plant.category}`}
          className="hover:text-green-600 transition-colors capitalize"
        >
          {plant.category}
        </Link>
        <span>/</span>
        <span className="text-gray-600">{plant.name}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-8">
        <div className="text-7xl">{plant.emoji}</div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${
                plant.category === "indoor"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {plant.category}
            </span>
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${difficultyColor[plant.difficulty]}`}
            >
              {plant.difficulty}
            </span>
            {plant.petSafe === true && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-teal-100 text-teal-700">
                🐾 Pet Safe
              </span>
            )}
            {plant.petSafe === false && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-red-100 text-red-700">
                ⚠️ Toxic to Pets
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">{plant.name}</h1>
          <p className="text-gray-500 mt-2 text-lg">{plant.description}</p>
        </div>
      </div>

      {/* Quick-care grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { icon: "💡", label: "Light", value: plant.light },
          { icon: "💧", label: "Water", value: plant.water },
          { icon: "🌡️", label: "Temp", value: plant.temperature },
          { icon: "💨", label: "Humidity", value: plant.humidity },
        ].map(({ icon, label, value }) => (
          <div
            key={label}
            className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center"
          >
            <div className="text-2xl mb-1">{icon}</div>
            <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">
              {label}
            </div>
            <div className="text-sm font-medium text-gray-700">{value}</div>
          </div>
        ))}
      </div>

      {/* Detail sections */}
      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <Section title="🪱 Soil">
            <p className="text-sm text-gray-600">{plant.soil}</p>
          </Section>
          <Section title="🌱 Fertilizing">
            <p className="text-sm text-gray-600">{plant.fertilizing}</p>
          </Section>
          <Section title="✂️ Propagation">
            <p className="text-sm text-gray-600">{plant.propagation}</p>
          </Section>
        </div>

        <div className="space-y-4">
          <Section title="🐛 Common Problems">
            <ul className="space-y-1">
              {plant.commonProblems.map((p, i) => (
                <li key={i} className="text-sm text-gray-600 flex gap-2">
                  <span className="text-red-400 mt-0.5 shrink-0">•</span>
                  {p}
                </li>
              ))}
            </ul>
          </Section>
          <Section title="💡 Pro Tips">
            <ul className="space-y-1">
              {plant.tips.map((t, i) => (
                <li key={i} className="text-sm text-gray-600 flex gap-2">
                  <span className="text-green-500 mt-0.5 shrink-0">•</span>
                  {t}
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {plant.tags.map((tag) => (
          <Link
            key={tag}
            href={`/plants?q=${encodeURIComponent(tag)}`}
            className="text-xs bg-gray-100 hover:bg-green-100 hover:text-green-700 text-gray-600 px-3 py-1 rounded-full transition-colors"
          >
            #{tag}
          </Link>
        ))}
      </div>

      {/* Related plants */}
      {related.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            More {plant.category} plants
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/plants/${r.slug}`}
                className="border border-gray-200 rounded-xl p-4 hover:border-green-400 hover:shadow-sm transition-all group text-center"
              >
                <div className="text-3xl mb-2">{r.emoji}</div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                  {r.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
      <h3 className="font-semibold text-gray-700 mb-2">{title}</h3>
      {children}
    </div>
  );
}
