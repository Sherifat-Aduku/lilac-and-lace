import { useParams, Link } from "react-router-dom";
import routes from "../utils/routes";

const blogData = [
  {
    slug: "african-designers-redefining-global-fashion",
    title: "How African Designers Are Redefining Global Fashion",
    tag: "Culture",
    content:
      "African designers are no longer waiting for a seat at the table — they are building their own. From Lagos to Accra, a new wave of creative voices is reshaping what global fashion looks like, sounds like, and stands for.",
  },
  {
    slug: "dressing-every-body-fashion-beyond-size",
    title: "Dressing Every Body: Fashion Beyond Size",
    tag: "Inclusivity",
    content:
      "The fashion industry has spent decades designing for one body type. That is changing. Designers across Africa are leading a quiet revolution — creating pieces that celebrate every curve, every shape, every woman.",
  },
  {
    slug: "rise-of-independent-fashion-houses-africa",
    title: "The Rise of Independent Fashion Houses in Africa",
    tag: "Industry",
    content:
      "Independent fashion houses across Africa are proving that you don't need a Paris address to build a global brand. With creativity, community, and craft, a new generation of designers is writing their own rules.",
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="bg-purple-100 min-h-screen flex flex-col items-center justify-center px-6">
        <h2 className="text-3xl font-serif text-purple-900 mb-4">
          Article not found
        </h2>
        <p className="text-gray-600 mb-8">
          This story may have moved or doesn't exist yet.
        </p>
        <Link to={routes.blogs}>
          <button className="px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition">
            Back to Stories
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-purple-100 min-h-screen px-6 py-20">
      <div className="max-w-3xl mx-auto">

        {/* Back link */}
        <Link
          to={routes.blogs}
          className="text-purple-500 text-sm uppercase tracking-widest hover:text-purple-700 transition"
        >
          ← Back to Stories
        </Link>

        {/* Tag */}
        <p className="text-purple-500 uppercase tracking-widest text-xs mt-8 mb-3">
          {post.tag}
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
          {post.title}
        </h1>

        {/* Divider */}
        <div className="mt-8 mb-8 border-t border-purple-200" />

        {/* Content */}
        <p className="text-gray-700 text-lg leading-relaxed">{post.content}</p>

        {/* Bottom CTA */}
        <div className="mt-16">
          <Link to={routes.blogs}>
            <button className="px-6 py-3 border border-purple-400 text-purple-900 rounded-md hover:bg-purple-100 transition">
              Read More Stories
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BlogPost;