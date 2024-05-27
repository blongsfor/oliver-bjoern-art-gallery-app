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
  artPiecesInfos,
}) {
  return (
    <>
      <Link href={`art-pieces/${slug}`}>
        <Image src={image} width={500} height={500} alt={title}></Image>
      </Link>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        artPiecesInfos={artPiecesInfos}
      />
      <h3>{title}</h3>
      <p>{artist}</p>
    </>
  );
}
