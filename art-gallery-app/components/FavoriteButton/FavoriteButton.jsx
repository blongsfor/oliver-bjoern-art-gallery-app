import favorite from "../../resources/assets/isFavorite.png";
import notFavorite from "../../resources/assets/notFavorite.png";
import Image from "next/image";

export default function FavoriteButton({
  isFavorite,
  onToggleFavorite,
  slug,
  artPiecesInfos,
}) {
  return (
    <Image
      src={isFavorite ? favorite : notFavorite}
      width={30}
      height={30}
      alt="favorite"
      artPiecesInfos={artPiecesInfos}
      onClick={onToggleFavorite}
    />
  );
}
