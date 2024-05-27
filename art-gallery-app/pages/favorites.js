import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useState } from "react";

export default function Favorites({
  artPiecesInfos,
  onToggleFavorite,
  pieces,
}) {
  const [artPieces, setArtPieces] = useState([]);

  const favoritePieces = pieces.filter((piece) => {
    const foundArtPiece = artPiecesInfos.find(
      (artPiece) => artPiece.slug === piece.slug
    );
    return foundArtPiece && foundArtPiece.isFavorite;
  });

  console.log("artPiecesInfos favorites.js: ", artPiecesInfos);

  // function handleToggleFavorite(slug) {
  //   // See if the art piece is already in the array
  //   const info = artPieces.find((art) => art.slug === slug);
  //   if (info) {
  //     // If the art piece is already in the array, toggle the isFavorite value
  //     const newInfo = artPieces.map((artPiece) =>
  //       artPiece.slug === slug
  //         ? { ...artPiece, isFavorite: !artPiece.isFavorite }
  //         : artPiece
  //     );
  //     setArtPieces(newInfo);
  //     console.log("afterClickIf", artPieces);
  //   } else {
  //     // If the art piece is not in the array already, add it with the favorite as true
  //     const newInfo = [...artPieces, { slug, isFavorite: true }];
  //     setArtPieces(newInfo);
  //     console.log("afterClickElse", artPieces);
  //   }
  // }

  // function handleToggleFavorite(slug) {
  //   const foundArtPiece = artPieces.find(
  //     (artPiece) => artPiece.slug === slug
  //   );
  //   if (foundArtPiece) {
  //     setArtPieces(
  //       artPieces.map(
  //         (artPiecesInfo) =>
  //           artPiecesInfo.slug === slug && {
  //             ...artPiecesInfo,
  //             isFavorite: !artPiecesInfo.isFavorite,
  //           }
  //       )
  //     );
  //   } else {
  //     setArtPieces([...artPieces, { slug, isFavorite: true }]);
  //   }
  // }


  return (
    <>
      <ArtPieces pieces={favoritePieces} />
    </>
  );
}
