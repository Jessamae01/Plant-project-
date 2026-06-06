import Link from "next/link";

const categories = [
  { href: "/indoor", emoji: "🪴", title: "Indoor Plants", desc: "Perfect for homes and offices" },
  { href: "/outdoor", emoji: "🌳", title: "Outdoor Plants", desc: "Gardens, yards, and landscapes" },
  { href: "/edible", emoji: "🥬", title: "Edible Plants", desc: "Grow your own food" },
  { href: "/medicinal", emoji: "🌿", title: "Medicinal Plants", desc: "Natural healing herbs" },
  { href: "/pet-safety", emoji: "🐾", title: "Pet Safety", desc: "Safe & toxic plants for pets" },
  { href: "/region", emoji: "🗺️", title: "By Region", desc: "Find plants for your climate" },
];

const hints = ["Monstera", "Lavender", "Snake Plant", "Rosemary", "Fiddle Leaf Fig"];

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Discover the World of Plants
          </h1>
          <p className="text-green-100 text-lg mb-8">
            Search thousands of plants, get care tips, and find what grows best in your region.
          </p>
          <div className="relative max-w-xl mx-auto mb-4">
            <input
              type="text"
              placeholder="Search for any plant..."
              className="w-full py-3 pl-5 pr-14 rounded-full text-gray-800 text-base shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {hints.map((hint) => (
              <button
                key={hint}
                className="text-sm bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-full transition-colors"
              >
                {hint}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 hover:border-green-400 hover:shadow-md transition-all group"
            >
              <span className="text-3xl">{cat.emoji}</span>
              <div>
                <h3 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
