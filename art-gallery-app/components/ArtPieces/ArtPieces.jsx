export default function ArtPieces({ pieces }) {
  //   console.log("Pieces: ", pieces());

  console.log("fetched", typeof fetchedPieces);
  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <li key={pieces.slug}>{piece.name}</li>
        ))}
      </ul>
    </>
  );
}
