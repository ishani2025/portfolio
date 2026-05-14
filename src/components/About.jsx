export default function About() {
  return (
    <section className="section" id="about">

      <h2>About Me</h2>

      <div className="about-container">

        <img
          src="/images/me_singing.jpg"
          alt="singing"
        />

        <div>

          <p>
            I love building practical AI systems, but lately, I've been looking 'under the hood.'
            Beyond my experience with FastAPI and mobile development.
          </p>

          <p>
            I am currently diving into Open Source projects to collaborate on large-scale engineering challenges.
            I've also developed a strong fascination with chip design and hardware architecture, as I believe truly efficient AI requires a deep understanding of the metal it runs on.
            Whether I'm debugging a dual-agent RAG pipeline or exploring the complexities of semiconductors, I approach every challenge with the same creativity I want to bring to my storytelling and singing.
          </p>

        </div>

      </div>

    </section>
  );
}