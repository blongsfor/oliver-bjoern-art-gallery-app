import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function Favorites({ artPiecesInfos, onToggleFavorite }) {
  const favoritePieces = artPiecesInfos.filter((piece) => piece.isFavorite);

  return (
    <>
      <h2 className="heading">Favorites</h2>
      {favoritePieces.length > 0 ? (
        <ArtPieces
          pieces={favoritePieces}
          onToggleFavorite={onToggleFavorite}
        />
      ) : (
        <p>There are no favorites yet.</p>
      )}
    </>
  );
}
