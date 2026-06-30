import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import type { Dictionary } from "@/i18n/dictionaries";

type ContactSectionProps = Readonly<{
  dictionary: Dictionary;
}>;

export function ContactSection({ dictionary }: ContactSectionProps) {
  return (
    <section
      aria-labelledby="contact-title"
      className="contact-section"
      id="contact"
    >
      <Container className="contact-section__inner">
        <div>
          <p className="section-eyebrow">{dictionary.contact.eyebrow}</p>
          <h2 className="contact-section__title" id="contact-title">
            {dictionary.contact.heading}
          </h2>
        </div>

        <div className="contact-section__body">
          <p>{dictionary.contact.body}</p>
          <div className="contact-section__actions">
            <span className="contact-section__primary-label">
              {dictionary.contact.primaryCta}
            </span>
            <ButtonLink href="#capabilities" variant="quiet">
              {dictionary.contact.secondaryCta}
            </ButtonLink>
          </div>
          <p className="contact-section__note">
            {dictionary.contact.missingDestination}
          </p>
        </div>
      </Container>
    </section>
  );
}
