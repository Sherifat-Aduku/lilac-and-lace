// FeaturedSection.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";
import featured2 from "../../assets/featured2.jpg";
import featured1 from "../../assets/featured1.jpg";
import featured3 from "../../assets/featured3.jpg";

const features = [
  {
    image: featured3,
    tag: "Heritage",
    title: "Threads of Identity",
    blurb:
      "How a new generation of African designers is weaving ancestry into modern silhouettes.",
  },
  {
    image: featured1,
    tag: "Craft",
    title: "The Atelier Hour",
    blurb:
      "Inside the quiet rituals of couture — hand-stitched detail, pinned to perfection.",
  },
  {
    image: featured2,
    tag: "Editorial",
    title: "A Modern Heritage",
    blurb:
      "Pastel tailoring, sculptural lines, and the soft confidence of a new luxury.",
  },
];

const FeaturedSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-purple-500 uppercase tracking-widest text-xs md:text-sm">
            The Editorial
          </p>
          <h2 className="font-serif text-2xl md:text-4xl text-gray-900 mt-3 leading-snug">
            Featured This Season
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            A curated lens on contemporary African couture — the cuts, the
            craft, and the women shaping a new luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, i) => (
            <article
              key={item.title}
              className={`group transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative overflow-hidden rounded-md bg-gray-100 aspect-[4/5]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-purple-500 text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <div className="pt-5">
                <h3 className="font-serif text-lg md:text-xl text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mt-2 leading-relaxed">
                  {item.blurb}
                </p>
                <Link
                  to={routes.blogs}
                  className="text-purple-500 text-sm mt-4 inline-block hover:text-purple-700 transition"
                >
                  Read story →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
