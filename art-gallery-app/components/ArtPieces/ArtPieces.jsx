import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  //   console.log("Pieces: ", pieces());

  console.log("fetched", typeof fetchedPieces);
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={pieces.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          />
        </li>
      ))}
    </ul>
  );
}
