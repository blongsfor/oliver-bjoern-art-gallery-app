import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function Favorites({
  artPiecesInfos,
  onToggleFavorite,
  pieces,
}) {
  console.log("alle infos:", artPiecesInfos);

  function handleDisplayFavorites() {
    return artPiecesInfo.filter((pieceInfo) => pieceInfo.isFavorite);
  }

  return (
    <>
      <ArtPieces pieces={handleDisplayFavorites} />
    </>
  );
}
