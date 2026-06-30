import { Container } from "@/components/layout/container";
import { company, getCompanyAddress } from "@/content/company";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";

type ContactSectionProps = Readonly<{
  dictionary: Dictionary;
  locale: Locale;
}>;

export function ContactSection({ dictionary, locale }: ContactSectionProps) {
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
            <a
              className="button-link button-link--primary"
              href={company.emailHref}
            >
              {dictionary.contact.emailCta}
            </a>
            <a
              className="button-link button-link--quiet"
              href={company.phoneHref}
            >
              {dictionary.contact.phoneCta}
            </a>
          </div>
          <address className="contact-section__address">
            <span className="contact-section__address-label">
              {dictionary.contact.addressLabel}
            </span>
            <span className="contact-section__address-value">
              {getCompanyAddress(locale)}
            </span>
          </address>
        </div>
      </Container>
    </section>
  );
}
