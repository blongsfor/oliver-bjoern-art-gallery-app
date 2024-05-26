import { useRouter } from "next/router";
import ArtPiecesDetails from "../../../components/ArtPieceDetails/ArtPieceDetails.jsx";

export default function ArtPiecesDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  console.log("pieces: ", pieces);

  const selectedArtPiece = pieces.find((piece) => piece.slug === slug);

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
