import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function Spotlight({ pieces }) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  const selectedPiece = pieces[randomIndex];

  return (
    <div>
      <h2>Spotlight</h2>
      <ArtPiecePreview
        image={selectedPiece.imageSource}
        title={selectedPiece.name}
        artist={selectedPiece.artist}
      />
    </div>
  );
}
