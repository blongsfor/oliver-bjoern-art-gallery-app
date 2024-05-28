import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function Favorites({ artPiecesInfos, onToggleFavorite }) {
  const favoritePieces = artPiecesInfos.filter((piece) => piece.isFavorite);

  return (
    <>
      <h2 className="heading">Favorites</h2>
      <ArtPieces pieces={favoritePieces} onToggleFavorite={onToggleFavorite} />
    </>
  );
}
