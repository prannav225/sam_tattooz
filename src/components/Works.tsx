import { useState, useMemo } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";

interface TattooWork {
  id: number;
  src: string;
  title: string;
  category: "Fine-Line" | "Black & Grey" | "Custom Realism";
  placement: string;
  isFeatured?: boolean;
  span?: string;
}

const PORTFOLIO_ITEMS: TattooWork[] = [
  {
    id: 1,
    src: "/gallery/1.webp",
    title: "Sacred Geometric Sleeve",
    category: "Fine-Line",
    placement: "Forearm & Wrist",
    isFeatured: true,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    src: "/gallery/2.webp",
    title: "Fine-Line Floral Botanical",
    category: "Fine-Line",
    placement: "Collarbone Flow",
    span: "col-span-1",
  },
  {
    id: 3,
    src: "/gallery/3.jpg",
    title: "Micro-Detail Realism",
    category: "Black & Grey",
    placement: "Upper Arm",
    span: "col-span-1",
  },
  {
    id: 4,
    src: "/gallery/4.jpg",
    title: "Anatomical Spine Script",
    category: "Fine-Line",
    placement: "Spine Alignment",
    span: "col-span-1",
  },
  {
    id: 5,
    src: "/gallery/5.webp",
    title: "Chiaroscuro Portrait",
    category: "Black & Grey",
    placement: "Outer Deltoid",
    span: "col-span-1",
  },
  {
    id: 6,
    src: "/gallery/6.webp",
    title: "Mythological Lion Realism",
    category: "Custom Realism",
    placement: "Full Chest Piece",
    isFeatured: true,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 7,
    src: "/gallery/7.webp",
    title: "Intricate Mandala Alignment",
    category: "Fine-Line",
    placement: "Back Shoulder",
    span: "col-span-1",
  },
  {
    id: 8,
    src: "/gallery/8.webp",
    title: "Botanical Silhouette",
    category: "Fine-Line",
    placement: "Tricep & Bicep",
    span: "col-span-1",
  },
  {
    id: 9,
    src: "/gallery/9.webp",
    title: "Nordic Compass & Runes",
    category: "Fine-Line",
    placement: "Inner Forearm",
    span: "col-span-1",
  },
  {
    id: 10,
    src: "/gallery/10.webp",
    title: "Geometric Compass",
    category: "Fine-Line",
    placement: "Bicep Band",
    span: "col-span-1",
  },
  {
    id: 11,
    src: "/gallery/11.webp",
    title: "Deep Shadow Sculpture",
    category: "Black & Grey",
    placement: "Calf & Shin",
    span: "col-span-1",
  },
  {
    id: 12,
    src: "/gallery/12.webp",
    title: "Anatomical Wolf Portrait",
    category: "Custom Realism",
    placement: "Forearm Wrap",
    isFeatured: true,
    span: "md:col-span-2",
  },
  {
    id: 13,
    src: "/gallery/13.webp",
    title: "Delicate Minimalist Flora",
    category: "Fine-Line",
    placement: "Ribcage Contour",
    span: "col-span-1",
  },
  {
    id: 14,
    src: "/gallery/14.webp",
    title: "Architectural Line Geometry",
    category: "Fine-Line",
    placement: "Forearm",
    span: "col-span-1",
  },
  {
    id: 15,
    src: "/gallery/15.jpg",
    title: "Baroque Portrait Shadow",
    category: "Black & Grey",
    placement: "Thigh Piece",
    span: "col-span-1",
  },
  {
    id: 16,
    src: "/gallery/16.webp",
    title: "Micro-Script & Symbolism",
    category: "Fine-Line",
    placement: "Ankle / Achilles",
    span: "col-span-1",
  },
  {
    id: 18,
    src: "/gallery/18.jpg",
    title: "Dark Chiaroscuro Skull",
    category: "Black & Grey",
    placement: "Upper Arm",
    span: "col-span-1",
  },
  {
    id: 20,
    src: "/gallery/20.webp",
    title: "Ornamental Lotus Flow",
    category: "Fine-Line",
    placement: "Shoulder Blade",
    span: "col-span-1",
  },
  {
    id: 21,
    src: "/gallery/21.jpg",
    title: "Greek Mythology Relic",
    category: "Custom Realism",
    placement: "Forearm",
    span: "col-span-1",
  },
  {
    id: 26,
    src: "/gallery/26.webp",
    title: "Linear Abstract Form",
    category: "Fine-Line",
    placement: "Wrist to Elbow",
    span: "col-span-1",
  },
];

const CATEGORIES = ["All", "Fine-Line", "Black & Grey", "Custom Realism"];
const PREVIEW_LIMIT = 6;

export function Works() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<TattooWork | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  const filteredPortfolio = useMemo(() => {
    if (activeCategory === "All") return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  const handleToggleExpand = () => {
    if (showAll) {
      setShowAll(false);
      document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
    } else {
      setShowAll(true);
    }
  };

  return (
    <section
      className="relative w-full pt-20 pb-16 sm:pt-28 sm:pb-24 md:pt-36 md:pb-32 px-4 sm:px-6 lg:px-8 bg-studio-grey-ambient text-[#F7F5F2] overflow-hidden"
      id="works"
    >
      {/* Seamless Feathered Blend from Studio Section */}
      <div className="absolute top-0 inset-x-0 h-44 md:h-64 seam-blend-top pointer-events-none z-10" />

      {/* Warm Ambient Gallery Illumination */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[850px] h-[500px] ambient-glow-amber pointer-events-none opacity-60" />
      <div className="absolute inset-0 warm-spotlight-side-left pointer-events-none opacity-60" />
      <div className="absolute inset-0 warm-spotlight-side-right pointer-events-none opacity-60" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[500px] ambient-glow-deep pointer-events-none opacity-70" />
      <div className="absolute inset-0 studio-slats-overlay pointer-events-none opacity-25" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 md:mb-16 pb-6 sm:pb-8 border-b border-[#A18773]/30 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D0AD87] mb-2 sm:mb-3 font-medium">
              <span>✦</span>
              <span>Curated Portfolio</span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#F7F5F2]">
              Selected Works.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 sm:pt-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-[11px] sm:text-xs uppercase tracking-wider px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#D0AD87] text-[#2E2B29] font-semibold shadow-md"
                    : "bg-[#2E2B29]/60 text-[#D9D2CB] hover:bg-[#2E2B29] hover:text-[#F7F5F2] border border-[#A18773]/25"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Gallery Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 auto-rows-[300px] xs:auto-rows-[330px] sm:auto-rows-[350px]">
          {filteredPortfolio.map((item, index) => {
            const isHidden = !showAll && index >= PREVIEW_LIMIT;
            if (isHidden) return null;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`group relative rounded-2xl overflow-hidden border border-[#A18773]/25 bg-[#2E2B29] shadow-lg cursor-pointer transition-all duration-500 hover:border-[#D0AD87]/60 hover:shadow-2xl hover:shadow-black/50 block ${
                  item.isFeatured && activeCategory === "All" ? "xs:col-span-2 xs:row-span-2" : ""
                }`}
              >
                {/* Tattoo Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                />

                {/* Ambient Smoked Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E2B29]/95 via-[#2E2B29]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top Tag */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 flex items-center gap-2">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#2E2B29]/80 backdrop-blur-md text-[#D0AD87] border border-[#A18773]/30 font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Caption & Placement Details */}
                <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 p-3 sm:p-4 rounded-xl glass-smoked border border-[#A18773]/20 group-hover:border-[#D0AD87]/40 transition-colors">
                  <h3 className="text-sm sm:text-base md:text-lg text-[#F7F5F2] leading-snug line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between mt-1 text-[11px] sm:text-xs text-[#A18773]">
                    <span className="truncate pr-2">{item.placement}</span>
                    <span className="text-[#D0AD87] group-hover:translate-x-0.5 transition-transform shrink-0">
                      Inspect ↗
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More / Collapse Button (Shown across all screen sizes) */}
        {filteredPortfolio.length > PREVIEW_LIMIT && (
          <div className="mt-8 sm:mt-12 flex justify-center">
            <button
              onClick={handleToggleExpand}
              className="btn-studio-secondary w-full sm:w-auto px-8 py-3.5 sm:px-10 sm:py-4 text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2.5 cursor-pointer shadow-xl hover:scale-102 transition-all"
            >
              <span>
                {showAll
                  ? "Collapse Works Archive"
                  : `View More Works (+${filteredPortfolio.length - PREVIEW_LIMIT})`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 text-[#D0AD87]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#D0AD87]" />
              )}
            </button>
          </div>
        )}

        {/* Gallery Footer Note & Consultation CTA */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-12 rounded-2xl bg-[#2E2B29] border border-[#A18773]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-xl sm:text-2xl md:text-3xl text-[#F7F5F2] mb-1 sm:mb-2">
              Have an original concept in mind?
            </h4>
            <p className="text-xs sm:text-sm text-[#D9D2CB] font-light leading-relaxed">
              Bring your ideas or reference photos. Satwinder will design a
              bespoke composition tailored to your body.
            </p>
          </div>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-studio-primary cursor-pointer whitespace-nowrap text-xs py-3 px-6 w-full sm:w-auto text-center"
          >
            Start Your Project
          </button>
        </div>
      </div>

      {/* Lightbox Modal - Fully Responsive */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] rounded-2xl overflow-hidden bg-[#2E2B29] border border-[#D0AD87]/40 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2E2B29]/90 border border-[#A18773]/40 text-[#F7F5F2] hover:text-[#D0AD87] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Preview"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* High-res Image View */}
            <div className="relative overflow-hidden flex items-center justify-center bg-black/40 min-h-[260px] sm:min-h-[350px] max-h-[65vh]">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-4 sm:p-6 border-t border-[#A18773]/25 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 bg-[#2E2B29]">
              <div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#D0AD87] font-semibold">
                  {selectedImage.category} • {selectedImage.placement}
                </span>
                <h3 className="text-xl sm:text-2xl text-[#F7F5F2] mt-0.5">
                  {selectedImage.title}
                </h3>
              </div>
              <button
                onClick={() => {
                  setSelectedImage(null);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-studio-primary text-[11px] sm:text-xs py-2.5 px-5 cursor-pointer whitespace-nowrap w-full sm:w-auto text-center"
              >
                Inquire About Similar Piece
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
