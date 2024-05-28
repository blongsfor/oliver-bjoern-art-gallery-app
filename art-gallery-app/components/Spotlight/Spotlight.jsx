import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function Spotlight({ pieces, onToggleFavorite }) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  const selectedPiece = pieces[randomIndex];

  return (
    <div>
      <h2>Spotlight</h2>
      <ArtPiecePreview
        slug={selectedPiece?.slug}
        image={selectedPiece?.imageSource}
        artist={selectedPiece?.artist}
        isFavorite={selectedPiece?.isFavorite}
        onToggleFavorite={() => onToggleFavorite(selectedPiece?.slug)}
      />
    </div>
  );
}
