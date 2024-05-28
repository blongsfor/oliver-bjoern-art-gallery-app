import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview.jsx";

export default function ArtPieces({ pieces, onToggleFavorite }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              slug={piece.slug}
              isFavorite={piece.isFavorite}
              onToggleFavorite={() => onToggleFavorite(piece.slug)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
