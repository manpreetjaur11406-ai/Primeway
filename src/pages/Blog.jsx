import { Link } from "react-router-dom";
import "./Blog.css";

import truckEngine from "../assets/truck engine.jpeg";
import brakePad from "../assets/brake pad.jpeg";
import electricalParts from "../assets/electrical parts.jpeg";

function Blog() {
  const posts = [
    {
      title: "Engine Parts",
      category: "ENGINE PARTS",
      slug: "engine-parts",
      image: truckEngine,
      description:
        "Learn how quality engine parts help improve truck performance and reliability.",
    },
    {
      title: "Brake System",
      category: "BRAKE SYSTEM",
      slug: "brake-system",
      image: brakePad,
      description:
        "Important tips for maintaining your truck brake system and staying safe.",
    },
    {
      title: "Electrical Parts",
      category: "ELECTRICAL",
      slug: "electrical-parts",
      image: electricalParts,
      description:
        "Understand the essential electrical parts that keep your truck running.",
    },
  ];

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <h1>Our Blog</h1>
        <p>
          HOME <span>/</span> BLOG
        </p>
      </section>

      <section className="blog-section">
        <p className="blog-label">LATEST ARTICLES</p>
        <h2>Truck parts and maintenance tips</h2>

        <div className="blog-grid">
          {posts.map((post) => (
            <article className="blog-card" key={post.title}>
              <img src={post.image} alt={post.title} />

              <div className="blog-card-content">
                <p className="blog-category">{post.category}</p>
                <h3>{post.title}</h3>
                <p>{post.description}</p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="read-more-link"
                >
                  Continue Reading →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Blog;