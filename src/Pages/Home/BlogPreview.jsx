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
];

const BlogPreview = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-purple-500 uppercase tracking-widest text-xs md:text-sm">
            Journal
          </p>
          <h2 className="font-serif text-2xl md:text-4xl text-gray-900 mt-3 leading-snug">
            Latest Editorial Stories
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Conversations on African fashion, culture, inclusivity, and the
            voices shaping the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className={`group transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="overflow-hidden rounded-md aspect-[4/5] bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="pt-5">
                <span className="text-[10px] tracking-[0.25em] uppercase text-purple-500">
                  {post.tag}
                </span>
                <h3 className="font-serif text-lg md:text-xl text-gray-900 mt-3 leading-snug">
                  {post.title}
                </h3>
                <Link
                  to={`/blogs/${post.slug}`}
                  className="inline-block mt-4 text-purple-500 text-sm hover:text-purple-700 transition"
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

export default BlogPreview;
