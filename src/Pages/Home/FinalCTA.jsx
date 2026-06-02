// FinalCTA.jsx
import { Link } from "react-router-dom";
import routes from "../../utils/routes";

const FinalCTA = () => {
  return (
    <section className="bg-linear-to-b from-white via-purple-50 to-purple-100 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-purple-500 uppercase tracking-widest text-xs md:text-sm">
          Join the Editorial
        </p>

        <h2 className="font-serif text-2xl md:text-4xl text-purple-900 mt-3 leading-snug">
          Style, culture, and conversations delivered with intention.
        </h2>

        <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed">
          Subscribe to Lilac & Lace for new editorials, designer features, and
          quiet inspiration in your inbox.
        </p>

        <form className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 text-sm rounded-md border border-purple-200 bg-white text-purple-900 placeholder:text-gray-400 focus:outline-none focus:border-purple-400 transition"
          />
          <button
            type="submit"
            className="px-5 py-3 text-sm md:text-base bg-purple-500 text-white rounded-md hover:bg-purple-600 transition"
          >
            Subscribe
          </button>
        </form>

        <div className="mt-8">
          <Link
            to={routes.blogs}
            className="text-purple-500 text-sm hover:text-purple-700 transition"
          >
            Or explore the journal →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
