import veekeejames from "../../assets/veekeejames.jpg";
import deolaSagoe from "../../assets/deolasagoe.jpg";
import aishaAyensu from "../../assets/aishaayensu.jpg";

const DesignerShowcase = () => {
  const designers = [
    {
      name: "Veekee James",
      location: "Nigeria",
      image: veekeejames,
      style: "Contemporary African Couture",
    },
    {
      name: "Aisha Ayensu",
      location: "Ghana",
      image: aishaAyensu,
      style: "Bold Textile Revival",
    },
    {
      name: "Deola Sagoe",
      location: "Nigeria",
      image: deolaSagoe,
      style: "Modern Heritage Wear",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">

          <p className="text-purple-500 tracking-widest uppercase text-xs md:text-sm">
            Designers · Africa · Spotlight
          </p>

          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-gray-900 mt-3 leading-snug">
            The Voices Shaping African Fashion
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Celebrating designers redefining African fashion through craftsmanship, culture, and storytelling.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {designers.map((designer, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-purple-100 transition duration-500 group"
            >
              <div className="h-60 md:h-72 overflow-hidden">
                <img
                  src={designer.image}
                  alt={designer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5 md:p-6">

                <h3 className="font-serif text-lg md:text-xl text-gray-900">
                  {designer.name}
                </h3>

                <p className="text-purple-500 text-sm mt-1">
                  {designer.location}
                </p>

                <p className="text-gray-600 text-sm md:text-base mt-3">
                  {designer.style}
                </p>

                <button className="mt-5 w-full bg-purple-500 text-white py-3 text-sm md:text-base rounded-md hover:bg-purple-600 transition">
                  View Profile
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default DesignerShowcase;