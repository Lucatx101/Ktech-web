import Link from "next/link";
import vi from "@/content/vi/common";
import { DEFAULT_LOCALE } from "@/i18n/locales";

const defaultLocalePath = `${DEFAULT_LOCALE}/`;

export default function RootPage() {
  return (
    <>
      <meta content={`0; url=${defaultLocalePath}`} httpEquiv="refresh" />
      <main className="foundation-page">
        <div className="foundation-main">
          <Link className="locale-switch__link" href={defaultLocalePath}>
            {vi.notFound.homeLabel}
          </Link>
        </div>
      </main>
    </>
  );
}
