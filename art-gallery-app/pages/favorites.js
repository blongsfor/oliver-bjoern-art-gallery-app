import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function Favorites({ artPiecesInfos, onToggleFavorite }) {
  const favoritePieces = artPiecesInfos.filter((piece) => piece.isFavorite);

  return (
    <ArtPieces
      pieces={favoritePieces}
      onToggleFavorite={onToggleFavorite}
    />
  );
}


