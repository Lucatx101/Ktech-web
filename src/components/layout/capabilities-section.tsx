import Image from "next/image";
import { Container } from "@/components/layout/container";
import { capabilityMedia } from "@/content/media";
import type { CapabilityKey } from "@/content/media";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";

type CapabilitiesSectionProps = Readonly<{
  dictionary: Dictionary;
  locale: Locale;
}>;

type CapabilityCardProps = Readonly<{
  description: string;
  image: (typeof capabilityMedia)[number];
  locale: Locale;
  number: string;
  title: string;
}>;

export function CapabilitiesSection({
  dictionary,
  locale,
}: CapabilitiesSectionProps) {
  return (
    <section
      aria-labelledby="capabilities-title"
      className="capabilities-section"
      id="capabilities"
    >
      <Container>
        <div className="capabilities-section__heading">
          <div className="section-heading">
            <p className="section-eyebrow">{dictionary.capabilities.eyebrow}</p>
            <h2 className="section-title" id="capabilities-title">
              {dictionary.capabilities.heading}
            </h2>
          </div>
          <p className="capabilities-section__intro">
            {dictionary.capabilities.introduction}
          </p>
        </div>

        <div className="capabilities-grid">
          {capabilityMedia.map((image, index) => {
            const content =
              dictionary.capabilities.items[
                image.capabilityKey as CapabilityKey
              ];

            return (
              <CapabilityCard
                description={content.description}
                image={image}
                key={image.id}
                locale={locale}
                number={String(index + 1).padStart(2, "0")}
                title={content.title}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function CapabilityCard({
  description,
  image,
  locale,
  number,
  title,
}: CapabilityCardProps) {
  return (
    <article className="capability-card">
      <div className="capability-card__media">
        <Image
          alt={image.alt[locale]}
          className="capability-card__image"
          height={900}
          sizes="(min-width: 1024px) 42vw, (min-width: 768px) 46vw, 100vw"
          src={getLargestVariant(image)}
          width={1200}
        />
      </div>
      <div className="capability-card__body">
        <p className="capability-card__number">{number}</p>
        <h3 className="capability-card__title">{title}</h3>
        <p className="capability-card__description">{description}</p>
      </div>
    </article>
  );
}

function getLargestVariant(image: (typeof capabilityMedia)[number]) {
  const largestWidth = Math.max(...image.widths);
  return `${image.basePath}-${largestWidth}.webp`;
}
