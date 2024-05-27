import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <Link href={"/"}>Back</Link>
      <Image src={image} width={500} height={500} alt={title}></Image>
      <h3>Title: {title}</h3>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </>
  );
}
