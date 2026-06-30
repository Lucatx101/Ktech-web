"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { brandMedia } from "@/content/media";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";
import { Container } from "@/components/layout/container";
import { LocaleSwitch } from "@/components/ui/locale-switch";

type SiteHeaderProps = Readonly<{
  currentLocale: Locale;
  dictionary: Dictionary;
}>;

const navItems = [
  { key: "about", href: "#about" },
  { key: "capabilities", href: "#capabilities" },
  { key: "manufacturing", href: "#manufacturing" },
  { key: "contact", href: "#contact" },
] as const;

export function SiteHeader({ currentLocale, dictionary }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link
          aria-label={dictionary.brandName}
          className="site-header__brand"
          href={`/${currentLocale}`}
          onClick={closeMenu}
        >
          <Image
            alt={brandMedia.logo.alt[currentLocale]}
            className="site-header__logo"
            height={60}
            priority
            src={brandMedia.logo.path}
            width={112}
          />
        </Link>

        <button
          aria-controls={menuId}
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen
              ? dictionary.header.menuCloseLabel
              : dictionary.header.menuOpenLabel
          }
          className="site-header__menu-button"
          onClick={() => setIsMenuOpen((value) => !value)}
          type="button"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <div
          className={[
            "site-header__navigation",
            isMenuOpen ? "site-header__navigation--open" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          id={menuId}
        >
          <nav
            aria-label={dictionary.header.navigationLabel}
            className="site-header__nav"
          >
            {navItems.map((item) => (
              <Link
                className="site-header__nav-link"
                href={item.href}
                key={item.key}
                onClick={closeMenu}
              >
                {dictionary.navigation[item.key]}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <LocaleSwitch
              className="locale-switch--header"
              currentLocale={currentLocale}
              dictionary={dictionary}
              onNavigate={closeMenu}
            />
            <Link
              className="site-header__contact"
              href="#contact"
              onClick={closeMenu}
            >
              {dictionary.header.contactCta}
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
