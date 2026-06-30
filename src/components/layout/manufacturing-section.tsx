import { Container } from "@/components/layout/container";
import type { Dictionary } from "@/i18n/dictionaries";

type ManufacturingSectionProps = Readonly<{
  dictionary: Dictionary;
}>;

export function ManufacturingSection({
  dictionary,
}: ManufacturingSectionProps) {
  return (
    <section
      aria-labelledby="manufacturing-title"
      className="manufacturing-section"
      id="manufacturing"
    >
      <Container>
        <div className="manufacturing-section__heading">
          <div className="section-heading section-heading--dark">
            <p className="section-eyebrow">
              {dictionary.manufacturing.eyebrow}
            </p>
            <h2 className="section-title" id="manufacturing-title">
              {dictionary.manufacturing.heading}
            </h2>
          </div>
          <p className="manufacturing-section__intro">
            {dictionary.manufacturing.introduction}
          </p>
        </div>

        <div className="production-stats">
          {dictionary.manufacturing.figures.map((figure, index) => (
            <article className="production-stat" key={figure.label}>
              <p className="production-stat__index">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="production-stat__value">{figure.value}</p>
              <p className="production-stat__label">{figure.label}</p>
            </article>
          ))}
        </div>

        <div className="equipment-inventory">
          <h3 className="equipment-inventory__title">
            {dictionary.manufacturing.equipmentHeading}
          </h3>
          <ul className="equipment-inventory__list">
            {dictionary.manufacturing.equipment.map((item) => (
              <li className="equipment-inventory__item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
