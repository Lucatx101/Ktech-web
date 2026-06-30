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
  imageSizes: string;
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
                imageSizes={getCapabilityImageSizes(index)}
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
  imageSizes,
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
          sizes={imageSizes}
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

function getCapabilityImageSizes(index: number) {
  if (index === 4) {
    return "(min-width: 1024px) 30vw, (min-width: 768px) 92vw, 100vw";
  }

  if (index < 2) {
    return "(min-width: 1024px) 46vw, (min-width: 768px) 46vw, 100vw";
  }

  return "(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 100vw";
}

function getLargestVariant(image: (typeof capabilityMedia)[number]) {
  const largestWidth = Math.max(...image.widths);
  return `${image.basePath}-${largestWidth}.webp`;
}
