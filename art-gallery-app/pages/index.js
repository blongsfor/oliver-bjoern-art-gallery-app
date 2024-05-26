import useSWR from "swr";
import { useEffect, useState } from "react";
import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function HomePage() {
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
    <div>
      <h1>Gallery App</h1>
      <ArtPieces pieces={data} />
    </div>
  );
}
