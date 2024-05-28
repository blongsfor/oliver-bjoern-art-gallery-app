import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { SWRConfig } from "swr";
import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [artPiecesInfos, setArtPiecesInfos] = useLocalStorageState(
    "artPiecesInfos",
    { defaultValue: [] }
  );

  const handleAddComment = (slug, commentText) => {
    console.log("slug, commentText", slug, commentText);
    const newComment = {
      text: commentText,
      date: new Date().toLocaleString(),
    };

    setArtPiecesInfos((prevInfos) =>
      prevInfos.map((artPieceInfo) =>
        artPieceInfo.slug === slug && artPieceInfo.comments
          ? {
              ...artPieceInfo,
              comments: [...artPieceInfo.comments, newComment],
            }
          : { ...artPieceInfo, comments: [newComment] }
      )
    );
  };
  console.log("artPiecesInfos", artPiecesInfos);
  function handleToggleFavorite(slug) {
    setArtPiecesInfos((prevInfos) =>
      prevInfos.map((artPiecesInfos) =>
        artPiecesInfos.slug === slug
          ? { ...artPiecesInfos, isFavorite: !artPiecesInfos.isFavorite }
          : artPiecesInfos
      )
    );
  }

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

  useEffect(() => {
    if (data && artPiecesInfos.length === 0) {
      setArtPiecesInfos(data.map((piece) => ({ ...piece, isFavorite: false })));
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) return null;

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          pieces={artPiecesInfos}
          onToggleFavorite={handleToggleFavorite}
          artPiecesInfos={artPiecesInfos}
          onSubmitComment={handleAddComment}
        />
        <Layout />
      </SWRConfig>
    </>
  );
}
