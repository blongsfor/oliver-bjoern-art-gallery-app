import { useRouter } from "next/router";
import ArtPiecesDetails from "../../../components/ArtPieceDetails/ArtPieceDetails.jsx";

export default function ArtPiecesDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const selectedArtPiece = pieces.find((piece) => piece.slug === slug);

  if (!selectedArtPiece) return null;

  return (
    <ArtPiecesDetails
      image={selectedArtPiece.imageSource}
      title={selectedArtPiece.name}
      artist={selectedArtPiece.artist}
      year={selectedArtPiece.year}
      genre={selectedArtPiece.genre}
    />
  );
}
