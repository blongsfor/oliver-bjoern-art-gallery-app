import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "./ArtPieceDetails";

test("displays art piece image, title, artist, year, genre, back link", () => {
  render(
    <ArtPieceDetails
      image="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
      title="Orange Red and Green Abstract Painting"
      artist="Jung-Hua Lui"
      year="2019"
      genre="Abstract Painting"
    />
  );

  const image = screen.getByRole("img", {
    image:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  });
  expect(image).toBeInTheDocument();

  const title = screen.getByText(
    "Title: Orange Red and Green Abstract Painting"
  );
  const artist = screen.getByText("Artist: Jung-Hua Lui");
  const year = screen.getByText("Year: 2019");
  const genre = screen.getByText("Genre: Abstract Painting");
  const backLink = screen.getByText("Back");

  expect(title).toBeInTheDocument();
  expect(artist).toBeInTheDocument();
  expect(year).toBeInTheDocument();
  expect(genre).toBeInTheDocument();
  expect(backLink).toBeInTheDocument();
});
