import { Container } from "../layout";
import { Tech } from "../components";
import { techs } from "../constants";

export default function Technologies() {
  return (
    <section className="bg-[#f1f3f3]" id="tech">
      <Container>
        <ul className="tech-wrapper">
          {techs.map((tech) => (
            <Tech key={tech.id} technology={tech} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
