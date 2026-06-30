import { heroMedia } from "@/content/media";
import type { Dictionary } from "@/i18n/dictionaries";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";

type HeroSectionProps = Readonly<{
  dictionary: Dictionary;
}>;

export function HeroSection({ dictionary }: HeroSectionProps) {
  return (
    <section aria-labelledby="hero-title" className="hero-section">
      <picture className="hero-section__media">
        <source
          sizes="100vw"
          srcSet={buildSrcSet("avif")}
          type="image/avif"
        />
        <source
          sizes="100vw"
          srcSet={buildSrcSet("webp")}
          type="image/webp"
        />
        <img
          alt={dictionary.hero.imageAlt}
          className="hero-section__image"
          decoding="async"
          fetchPriority="high"
          height="941"
          loading="eager"
          src={`${heroMedia.basePath}-1280.webp`}
          width="1672"
        />
      </picture>

      <div className="hero-section__overlay" aria-hidden="true" />

      <Container className="hero-section__content">
        <p className="hero-section__eyebrow">{dictionary.hero.eyebrow}</p>
        <h1
          aria-label={dictionary.hero.headline}
          className="hero-section__title"
          id="hero-title"
        >
          <span className="hero-section__title-line hero-section__title-line--understand">
            {dictionary.hero.headlineParts.understand}{" "}
          </span>
          <span className="hero-section__title-line hero-section__title-line--universe">
            <span className="hero-section__title-small">
              {dictionary.hero.headlineParts.the}{" "}
            </span>
            <span className="hero-section__title-strong">
              {dictionary.hero.headlineParts.universe}
            </span>
          </span>
        </h1>
        <p className="hero-section__copy">{dictionary.hero.copy}</p>
        <div className="hero-section__actions">
          <ButtonLink href="#capabilities">
            {dictionary.hero.primaryCta}
          </ButtonLink>
          <ButtonLink href="#contact" variant="secondary">
            {dictionary.hero.secondaryCta}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

function buildSrcSet(format: "avif" | "webp") {
  return heroMedia.widths
    .map((width) => `${heroMedia.basePath}-${width}.${format} ${width}w`)
    .join(", ");
}
