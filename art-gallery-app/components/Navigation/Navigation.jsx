import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="navbar">
      <Link href={`/`} className="link">
        Spotlight
      </Link>
      <Link href={`/art-pieces`} className="link">
        Art Pieces
      </Link>
      <Link href={`/favorites`} className="link">
        Favorites
      </Link>
    </nav>
  );
}
