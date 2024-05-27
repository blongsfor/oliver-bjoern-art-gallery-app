import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Layout from "../Layout/Layout";

export default function Spotlight({ pieces, onToggleFavorite }) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  const selectedPiece = pieces[randomIndex];

  return (
    <div>
      <h2>Spotlight</h2>
      <ArtPiecePreview
        slug={selectedPiece.slug}
        image={selectedPiece.imageSource}
        artist={selectedPiece.artist}
        onToggleFavorite={() => onToggleFavorite(selectedPiece.slug)}
      />
      {/* <FavoriteButton
        onToggleFavorite={() => onToggleFavorite(selectedPiece.slug)}
      /> */}
    </div>
  );
}
