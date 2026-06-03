import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import routes from "./utils/routes";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import Blogs from "./Pages/BlogPost";
import Contact from "./Pages/Contact";
import BlogPost from "./Pages/Home/BlogPost";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.blogs} element={<Blogs />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path="/blogs/:slug" element={<BlogPost />} />
      </Routes>
      
       <Footer/>
    </>
  );
};

export default App;