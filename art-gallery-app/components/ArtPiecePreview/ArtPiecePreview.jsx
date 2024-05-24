import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <Image src={image} width={500} height={500} alt={title}></Image>
      <h3>{title}</h3>
      <p>{artist}</p>
    </>
  );
}
