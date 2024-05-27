import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>
      <Link href={`art-pieces/${slug}`}>
        <Image
          className="artpiece"
          src={image}
          width={500}
          height={500}
          alt={title}
        ></Image>
      </Link>
      <FavoriteButton
        className="favorite-button"
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
      <h3>{title}</h3>
      <p>{artist}</p>
    </>
  );
}
