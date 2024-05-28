import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

const ColorsContainer = styled.div`
  text-align: center;
  margin-block-start: -20px;
  margin-block-end: 50px;
`;

const ColorChips = styled.div`
  --size: 2.5rem;

  display: inline-block;
  margin-inline: calc(var(--size) / 5);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: ${(props) => props.color};
  outline: 2px black solid;
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
  colors,
  isFavorite,
  onToggleFavorite,
  comments,
  onSubmitComment,
}) {
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
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          slug={slug}
        />
        <div className="details">
          <h3>Title: {title}</h3>
          <p>Artist: {artist}</p>
          <p>Year: {year}</p>
          <p>Genre: {genre}</p>
        </div>
      </div>
      <ColorsContainer>
        {colors.map((color, idx) => (
          <ColorChips key={idx} color={color} />
        ))}
      </ColorsContainer>
      <div className="comment-container">
        <CommentForm onSubmitComment={onSubmitComment} slug={slug} />
        <Comments comments={comments} />
      </div>
    </>
  );
}
