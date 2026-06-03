import Hero from "./Hero";
import Featured from "./Featured";
import DesignerShowcase from "./DesignerShowcase";
import BlogPreview from "../BlogPreview";
import FinalCTA from "./FinalCTA"
const Home = () => {
  return (
    <div  className="bg-linear-to-b from-purple-100 via-white to-purple-100">
      <Hero />
      <Featured />
      <DesignerShowcase />
      <BlogPreview />
      <FinalCTA/>
    </div>
  );
};

export default Home;