import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function Favorites({
  artPiecesInfos,
  onToggleFavorite,
  pieces,
}) {
  function handleDisplayFavorites() {
    return artPiecesInfo.filter((pieceInfo) => pieceInfo.isFavorite);
  }

  return (
    <>
      <ArtPieces pieces={handleDisplayFavorites} />
    </>
  );
}

// function handleToggleFavorite(slug) {
//     // See if the art piece is already in the array
//     const info = artPieces.find((art) => art.slug === slug);
//     if (info) {
//       // If the art piece is already in the array, toggle the isFavorite value
//       const newInfo = artPieces.map((artPiece) =>
//         artPiece.slug === slug
//           ? { ...artPiece, isFavorite: !artPiece.isFavorite }
//           : artPiece
//       );
//       setArtPieces(newInfo);
//       console.log("afterClickIf", artPieces);
//     } else {
//       // If the art piece is not in the array already, add it with the favorite as true
//       const newInfo = [...artPieces, { slug, isFavorite: true }];
//       setArtPieces(newInfo);
//       console.log("afterClickElse", artPieces);
//     }
//   }
