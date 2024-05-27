import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const Color = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>
      <Link href={"/art-pieces"}>Back</Link>
      <Image src={image} width={500} height={500} alt={title}></Image>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />

      <h3>Title: {title}</h3>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </>
  );
}
