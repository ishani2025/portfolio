export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <div className="hero-badge">
          Open To Work • Collaborate • Contribute
        </div>

        <h1>
          AI + Backend Engineer <br />
          Building Intelligent Systems
        </h1>

        <p>
          2nd Year Computer Science student at VIT Chennai focused on
          AI systems, developer tooling, and infrastructure-oriented products.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact
          </a>
        </div>

      </div>

      <div className="hero-right">
        <img src="/profile.jpg" alt="profile" />
      </div>

    </section>
  );
}