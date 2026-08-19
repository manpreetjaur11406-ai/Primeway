import { Link, useParams } from "react-router-dom";
import "./BlogArticle.css";

import truckEngine from "../assets/truck engine.jpeg";
import brakePad from "../assets/brake pad.jpeg";
import electricalParts from "../assets/electrical parts.jpeg";

function BlogArticle() {
  const { slug } = useParams();

  const articles = {
    "engine-parts": {
      title: "Engine Parts",
      image: truckEngine,
      content:
        "Quality engine parts are important for truck performance, fuel efficiency, and long-term reliability. Regular maintenance and using dependable spare parts can help prevent costly breakdowns.",
    },
    "brake-system": {
      title: "Brake System",
      image: brakePad,
      content:
        "A well-maintained brake system is essential for truck safety. Check brake pads, discs, and brake fluid regularly to ensure reliable stopping performance.",
    },
    "electrical-parts": {
      title: "Electrical Parts",
      image: electricalParts,
      content:
        "Electrical parts such as alternators, starters, batteries, and wiring help keep your truck operating properly. Choosing quality electrical components helps avoid unexpected failures.",
    },
  };

  const article = articles[slug];

  if (!article) {
    return <main className="article-page">Article not found.</main>;
  }

  return (
    <main className="article-page">
      <section className="article-hero">
        <h1>{article.title}</h1>
        <p>HOME / BLOG / {article.title.toUpperCase()}</p>
      </section>

      <article className="article-content">
        <img src={article.image} alt={article.title} />
        <h2>{article.title}</h2>
        <p>{article.content}</p>

        <Link to="/blog" className="back-to-blog">
          ← Back to Blog
        </Link>
      </article>
    </main>
  );
}

export default BlogArticle;