import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
  isFavorite,
  onToggleFavorite,
  comments,
  onSubmitComment,
  artPiecesInfos,
}) {
  // const comments = artPiecesInfos?.find(
  //   (artPieceInfo) => artPieceInfo?.slug === slug
  // )?.comments;
  // console.log("sligslogslug: ", slug);
  return (
    <>
      <div className="artpiece-details">
        <Link className="link" href={"/art-pieces"}>
          Back
        </Link>
        <Image
          className="artpiece"
          src={image}
          width={500}
          height={500}
          alt={title}
        ></Image>
        <div className="details" style={{ marginTop: "20px" }}>
          <h3>Title: {title}</h3>
          <p>Artist: {artist}</p>
          <p>Year: {year}</p>
          <p>Genre: {genre}</p>
        </div>
      </div>
      <div className="comment-container">
        <CommentForm onSubmitComment={onSubmitComment} slug={slug} />

        <Comments comments={comments} />
      </div>
    </>
  );
}
