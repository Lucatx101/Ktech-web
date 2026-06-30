import { Container } from "@/components/layout/container";
import type { Dictionary } from "@/i18n/dictionaries";

type AboutSectionProps = Readonly<{
  dictionary: Dictionary;
}>;

export function AboutSection({ dictionary }: AboutSectionProps) {
  return (
    <section aria-labelledby="about-title" className="about-section" id="about">
      <Container className="about-section__inner">
        <div className="section-heading about-section__heading">
          <p className="section-eyebrow">{dictionary.about.eyebrow}</p>
          <h2 className="section-title" id="about-title">
            {dictionary.about.heading}
          </h2>
        </div>

        <div className="about-section__body">
          <div className="about-section__copy">
            {dictionary.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ol className="about-chain">
            {dictionary.about.chain.map((item, index) => (
              <li className="about-chain__item" key={item}>
                <span className="about-chain__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="about-chain__label">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
