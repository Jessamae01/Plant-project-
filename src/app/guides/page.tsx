const guides = [
  { title: "Beginner's Guide to Houseplants", desc: "Everything you need to know to start your plant journey.", readTime: "8 min read", tag: "Beginner", emoji: "🌱" },
  { title: "Watering 101", desc: "Learn when, how much, and how to water your plants correctly.", readTime: "5 min read", tag: "Care", emoji: "💧" },
  { title: "Understanding Light Requirements", desc: "Decode what 'bright indirect light' really means for your plants.", readTime: "6 min read", tag: "Care", emoji: "☀️" },
  { title: "Repotting Your Plants", desc: "Step-by-step guide to repotting for healthier root systems.", readTime: "7 min read", tag: "Advanced", emoji: "🪴" },
  { title: "Dealing with Pests", desc: "Identify and eliminate common houseplant pests naturally.", readTime: "10 min read", tag: "Troubleshooting", emoji: "🐛" },
  { title: "Creating a Herb Garden", desc: "Grow a productive herb garden indoors or outdoors.", readTime: "9 min read", tag: "Edible", emoji: "🌿" },
];

const tagColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Care: "bg-blue-100 text-blue-700",
  Advanced: "bg-purple-100 text-purple-700",
  Troubleshooting: "bg-red-100 text-red-700",
  Edible: "bg-yellow-100 text-yellow-700",
};

export default function GuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">📖 Plant Guides</h1>
        <p className="text-gray-500 mt-2">Expert guides to help you grow thriving plants.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <div
            key={guide.title}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="text-4xl mb-3">{guide.emoji}</div>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${tagColors[guide.tag] || "bg-gray-100 text-gray-600"}`}>
              {guide.tag}
            </span>
            <h3 className="font-semibold text-gray-800 text-lg mt-3 group-hover:text-green-600 transition-colors">
              {guide.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2">{guide.desc}</p>
            <p className="text-xs text-gray-400 mt-3">⏱️ {guide.readTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
