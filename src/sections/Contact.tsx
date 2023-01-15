import { Container } from "../layout";
import { Form, MotionHeading } from "../components";

export default function Contact() {
  return (
    <section className="bg-[#e8e8e8] overflow-x-hidden" id="connect">
      <Container>
        <MotionHeading
          title="Get in touch"
          textStyles="main-title text-main-red"
        />

        <Form />
      </Container>
    </section>
  );
}
