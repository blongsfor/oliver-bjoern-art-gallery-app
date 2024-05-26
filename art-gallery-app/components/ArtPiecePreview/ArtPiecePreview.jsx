import Link from "next/link";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <>
      <Link href={`art-pieces/${slug}`}>
        <Image src={image} width={500} height={500} alt={title}></Image>
      </Link>
      <h3>{title}</h3>
      <p>{artist}</p>
    </>
  );
}
