import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  //   console.log("Pieces: ", pieces());

  console.log("fetched", typeof fetchedPieces);
  return (
    <>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={pieces.slug}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
        />
      ))}
    </>
  );
}
