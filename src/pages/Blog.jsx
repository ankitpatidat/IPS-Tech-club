import React from "react";
import "./Blog.css";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Web Development in 2024",
      author: "Aditya Patel",
      date: "March 10, 2024",
      category: "Tutorial",
      excerpt: "Learn the fundamentals of web development and the best resources to kickstart your journey in this comprehensive guide for beginners.",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "My Journey from Beginner to ML Engineer",
      author: "Priya Sharma",
      date: "March 5, 2024",
      category: "Experience",
      excerpt: "A personal story about learning machine learning, overcoming challenges, and landing a dream internship at a top tech company.",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Top 10 Python Libraries Every Developer Should Know",
      author: "Rahul Verma",
      date: "February 28, 2024",
      category: "Tutorial",
      excerpt: "Explore essential Python libraries that will boost your productivity and help you build amazing projects efficiently.",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Cracking Technical Interviews: Tips and Strategies",
      author: "Sneha Mehta",
      date: "February 20, 2024",
      category: "Interview",
      excerpt: "Proven strategies and tips for acing technical interviews at top companies based on real experiences and success stories.",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Building Your First IoT Project with Arduino",
      author: "Rohan Joshi",
      date: "February 15, 2024",
      category: "Tutorial",
      excerpt: "Step-by-step guide to creating your first IoT project using Arduino, sensors, and basic electronics components.",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "The Future of AI: Trends to Watch in 2024",
      author: "Ananya Gupta",
      date: "February 10, 2024",
      category: "Article",
      excerpt: "Discover the latest trends in artificial intelligence and how they're shaping the future of technology and innovation.",
      readTime: "9 min read"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Tutorial: "#0066ff",
      Experience: "#00cc66",
      Interview: "#ff9900",
      Article: "#9933ff"
    };
    return colors[category] || "#0066ff";
  };

  return (
    <div className="blog" >
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title" >Blog & Resources</h1>
          <p className="page-subtitle">Tutorials, experiences, and insights from our community</p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="blog-section" >
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div className="blog-card" key={post.id} >
                <div 
                  className="blog-category" 
                  style={{ backgroundColor: getCategoryColor(post.category) }}
                >
                  {post.category}
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <div className="blog-meta">
                  <span className="blog-author">By {post.author}</span>
                  <span className="blog-divider">•</span>
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-divider">•</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <p className="blog-excerpt">{post.excerpt}</p>
                <button className="read-more-btn" >
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="contribute-blog-section" >
        <div className="container">
          <h2 className="contribute-title">Want to Share Your Knowledge?</h2>
          <p className="contribute-description">
            Write for our blog and share your experiences, tutorials, or insights with the community.
          </p>
          <button className="btn-primary-large" >
            Write an Article
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
