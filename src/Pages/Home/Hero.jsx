import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";
import heroImage from "../../assets/hero.jpeg";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-linear-to-b from-purple-100 via-purple-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <div className="flex flex-col gap-5">

          <p className={`text-purple-500 tracking-widest uppercase text-xs md:text-sm transition-all duration-700
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Fashion · Lifestyle · Culture
          </p>

          <h1 className={`font-serif text-3xl md:text-5xl lg:text-6xl text-purple-900 leading-snug md:leading-tight transition-all duration-700 delay-200
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Style is not what you wear. <br />
            <span className="text-purple-500">It's how you live.</span>
          </h1>

          <p className={`text-gray-600 text-sm md:text-base leading-relaxed max-w-md transition-all duration-700 delay-300
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Lilac & Lace is a space for women who dress with intention,
            live with purpose, and refuse to pick one or the other.
          </p>

          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 transition-all duration-700 delay-500
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

            <Link to={routes.blogs}>
              <button className="px-5 py-3 text-sm md:text-base bg-purple-500 text-white rounded-md hover:bg-purple-600 transition">
                Read the Blog
              </button>
            </Link>

            <Link to={routes.about}>
              <button className="px-5 py-3 text-sm md:text-base border border-purple-400 text-purple-900 rounded-md hover:bg-purple-100 transition">
                Our Story
              </button>
            </Link>

          </div>
        </div>

        {/* Image */}
        <div className={`w-full h-[320px] md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-lg transition-all duration-1000
          ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          <img src={heroImage} className="w-full h-full object-cover object-top" />
        </div>

      </div>
    </section>
  );
};

export default Hero;