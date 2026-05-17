import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";
import heroImage from "../../Pages/Home/Hero";

const Hero = () => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-purple-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left - Text */}
        <div className="flex flex-col gap-6">

          <p
            className={`text-purple-500 font-medium tracking-widest uppercase text-sm transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Fashion · Lifestyle · Culture
          </p>

          <h1
            className={`text-5xl md:text-6xl font-serif text-purple-900 leading-tight transition-all duration-700 ease-out delay-200
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Style is not what you wear. <br />
            <span className="text-purple-500">It's how you live.</span>
          </h1>

          <p
            className={`text-gray-600 text-lg leading-relaxed max-w-md transition-all duration-700 ease-out delay-300
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Lilac & Lace is a space for women who dress with intention,
            live with purpose, and refuse to pick one or the other.
          </p>

          <div
            className={`flex gap-4 mt-2 transition-all duration-700 ease-out delay-500
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

            <Link to={routes.blogs}>
              <button className="px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300 shadow-sm font-medium">
                Read the Blog
              </button>
            </Link>

            <Link to={routes.about}>
              <button className="px-6 py-3 border border-purple-400 text-purple-900 rounded-md hover:bg-purple-200 transition duration-300 font-medium">
                Our Story
              </button>
            </Link>

          </div>
        </div>

        {/* Right - Image */}
        <div
          className={`w-full h-[550px] rounded-2xl overflow-hidden shadow-lg transition-all duration-1000 ease-out delay-300
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>

          <img
            src={heroImage}
            alt="Lilac and Lace Hero"
            className="w-full h-full object-cover object-top"
          />

        </div>

      </div>
    </section>
  );

};

export default Hero;