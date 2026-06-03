// BlogPreview.jsx

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import veekeeJames from "../../assets/veekeejames.jpg";
import deolaSagoe from "../../assets/deolasagoe.jpg";
import aishaAyensu from "../../assets/aishaayensu.jpg";

const posts = [
  {
    title: "How African Designers Are Redefining Global Fashion",
    tag: "Culture",
    slug: "african-designers-redefining-global-fashion",
    image: aishaAyensu,
  },
  {
    title: "Dressing Every Body: Fashion Beyond Size",
    tag: "Inclusivity",
    slug: "dressing-every-body-fashion-beyond-size",
    image: veekeeJames,
  },
  {
    title: "The Rise of Independent Fashion Houses in Africa",
    tag: "Industry",
    slug: "rise-of-independent-fashion-houses-africa",
    image: deolaSagoe,
  },
  {
    title: "African Fashion & The New Global Identity",
    tag: "Editorial",
    slug: "african-fashion-new-global-identity",
    image: veekeeJames,
  },
];

const runwayImages = [
  aishaAyensu,
  veekeeJames,
  deolaSagoe,
  veekeeJames,
  aishaAyensu,
];

const BlogPreview = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-purple-500 uppercase tracking-[0.3em] text-xs">
            Journal
          </p>

          <h2 className="font-serif text-2xl md:text-4xl text-gray-900 mt-3 leading-snug">
            Latest Editorial Stories
          </h2>

          <p className="text-gray-600 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Conversations on African fashion, culture, inclusivity, and the
            voices shaping the future of style across the continent.
          </p>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

          {posts.map((post, index) => (
            <article
              key={post.slug}
              className={`group transition-all duration-1000 ease-out ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: visible
                  ? `${index * 150}ms`
                  : "0ms",
              }}
            >
              <div className="overflow-hidden rounded-xl bg-gray-100 aspect-[3/4]">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                />
              </div>

              <div className="pt-4">
                <span className="text-[10px] tracking-[0.25em] uppercase text-purple-500">
                  {post.tag}
                </span>

                <h3 className="font-serif text-base md:text-lg text-gray-900 mt-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-sm mt-3 opacity-0 group-hover:opacity-100 transition duration-500">
                  Discover the designers, craftsmanship, and cultural stories
                  shaping this editorial feature.
                </p>

                <Link
                  to={`/blogs/${post.slug}`}
                  className="inline-block mt-4 text-purple-500 text-sm hover:text-purple-700 transition"
                >
                  Read Story →
                </Link>
              </div>
            </article>
          ))}

        </div>

        {/* Fashion Runway */}
        <div
          className={`mt-20 transition-all duration-1000 ease-out delay-500 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >

          <div className="text-center mb-10">
            <p className="text-purple-500 uppercase tracking-[0.3em] text-xs">
              Fashion Runway
            </p>

            <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mt-3">
              Trending Looks Across Africa
            </h3>

            <p className="text-gray-600 text-sm md:text-base mt-3 max-w-xl mx-auto">
              A curated showcase of silhouettes, textures, and statement pieces
              inspiring today's African fashion landscape.
            </p>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-4">

            {runwayImages.map((image, index) => (
              <div
                key={index}
                className="group min-w-[220px] md:min-w-[280px] flex-shrink-0 rounded-2xl overflow-hidden bg-gray-100"
              >
                <img
                  src={image}
                  alt="Fashion runway inspiration"
                  className="w-full h-[320px] md:h-[420px] object-cover transition duration-700 ease-out group-hover:scale-105"
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default BlogPreview;