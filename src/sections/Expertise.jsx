import ExpertiseCard from "../components/ExpertiseCard";
import { expertise } from "../data/portfolioData";

export default function Expertise() {
  return (
    <section className="section">

      <h2>What I Do</h2>

      <div className="expertise-grid">

        {expertise.map((item) => (
          <ExpertiseCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}

      </div>

    </section>
  );
}