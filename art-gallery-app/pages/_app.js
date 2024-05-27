import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { SWRConfig } from "swr";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [artPiecesInfos, setArtPiecesInfos] = useState([]);

  // const fetchedData = (data) => {
  //   // console.log("data:", data);
  //   return data;
  // };

  // console.log("fetchedData:", fetchedData);

  function handleToggleFavorite(slug) {
    console.log("slug", slug);
    const foundArtPiece = artPiecesInfos.find(
      (artPiece) => artPiece.slug === slug
    );
    if (foundArtPiece) {
      setArtPiecesInfos(
        artPiecesInfos.map(
          (artPiecesInfo) =>
            artPiecesInfo.slug === slug && {
              ...artPiecesInfo,
              isFavorite: !artPiecesInfo.isFavorite,
            }
        )
      );
    } else {
      setArtPiecesInfos([...artPiecesInfos, { slug, isFavorite: true }]);
    }

    // console.log("click:", handleToggleFavorite);
  }
  console.log("artPiecesInfos", artPiecesInfos);

  //console.log("check das: ", artPiecesInfos);
  const URL = "https://example-apis.vercel.app/api/art";

  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");

      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };

  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) return null;

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          pieces={data}
          onToggleFavorite={handleToggleFavorite}
          artPiecesInfos={artPiecesInfos}
        />
        <Layout />
      </SWRConfig>
    </>
  );
}
