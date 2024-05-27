import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function Favorites({ artPiecesInfos, handleDisplayFavorites }) {
  const favoritePieces = artPiecesInfos.filter((piece) => piece.isFavorite);

  return (
    <ArtPieces
      pieces={favoritePieces}
      artPiecesInfos={artPiecesInfos}
      handleDisplayFavorites={handleDisplayFavorites}
    />
  );
}
