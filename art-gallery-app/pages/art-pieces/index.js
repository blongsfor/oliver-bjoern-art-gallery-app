import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({ pieces, onToggleFavorite }) {
  return (
    <>
      <h2 className="heading">Art Pieces</h2>

      <ArtPieces pieces={pieces} onToggleFavorite={onToggleFavorite} />
    </>
  );
}
