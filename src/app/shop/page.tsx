const products = [
  { title: "Plant Care Cheat Sheet", desc: "Quick reference for 50+ common houseplants.", price: "$4.99", emoji: "📋", badge: "Bestseller" },
  { title: "Seasonal Planting Calendar", desc: "Know exactly what to plant and when, by region.", price: "$6.99", emoji: "📅", badge: null },
  { title: "Indoor Plant Identifier", desc: "Visual guide to identifying 100+ indoor plants.", price: "$9.99", emoji: "🔍", badge: "Popular" },
  { title: "Herb Garden Blueprint", desc: "Layout plans for small and large herb gardens.", price: "$7.99", emoji: "🗺️", badge: null },
  { title: "Pest Identification Guide", desc: "Spot and treat 30 common plant pests.", price: "$5.99", emoji: "🐛", badge: null },
  { title: "Companion Planting Chart", desc: "Which plants grow best together in your garden.", price: "$12.99", emoji: "🌻", badge: "New" },
];

const badgeColors: Record<string, string> = {
  Bestseller: "bg-yellow-100 text-yellow-700",
  Popular: "bg-blue-100 text-blue-700",
  New: "bg-green-100 text-green-700",
};

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">🛍️ Digital Downloads</h1>
        <p className="text-gray-500 mt-2">Instant-access guides, charts, and resources for plant lovers.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.title} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-3">{product.emoji}</div>
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-gray-800 text-lg">{product.title}</h3>
              {product.badge && (
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${badgeColors[product.badge]}`}>
                  {product.badge}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-2">{product.desc}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xl font-bold text-green-600">{product.price}</span>
              <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
