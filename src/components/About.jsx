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
  I love building practical AI applications, but lately, I've been looking 'under the hood' at the infrastructure powering them. 
  While my current work involves building RAG pipelines like LogSentinel and mobile apps like AuditOS, I am deeply invested in understanding the hardware layer.
</p>

<p>
  I actively follow India's semiconductor roadmap, from the rise of domestic Fabs to OSAT facilities, and I am currently exploring the Open Compute Project (OCP) to learn about open-source data center hardware. 
  I believe the most efficient AI systems require a deep understanding of the silicon they run on. 
  Whether I'm optimizing a backend or exploring semiconductor architecture, I bring the same creative energy I use for storytelling and singing.
</p>

        </div>

      </div>

    </section>
  );
}
