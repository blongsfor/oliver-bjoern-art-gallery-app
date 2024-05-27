import useSWR from "swr";
import { useEffect, useState } from "react";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Spotlight from "@/components/Spotlight/Spotlight";

export default function SpotlightPage({ data }) {
  return (
    <div>
      <h1>Gallery App</h1>
      <Spotlight pieces={data} />
    </div>
  );
}
