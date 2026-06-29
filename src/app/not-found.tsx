import Link from "next/link";
import vi from "@/content/vi/common";

export default function NotFound() {
  return (
    <div className="foundation-page">
      <main className="foundation-main">
        <h1 className="foundation-title">{vi.notFound.title}</h1>
        <p className="foundation-status">{vi.notFound.description}</p>
        <nav aria-label={vi.localeSwitchLabel} className="locale-switch">
          <Link className="locale-switch__link" href="/vi">
            {vi.notFound.homeLabel}
          </Link>
        </nav>
      </main>
    </div>
  );
}
