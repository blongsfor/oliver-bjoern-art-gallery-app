import useSWR from "swr";
import { useEffect, useState } from "react";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import Spotlight from "@/components/Spotlight/Spotlight";

export default function SpotlightPage({ pieces, onToggleFavorite }) {
  return (
    <div>
      <h1 className="heading">Gallery App</h1>
      <Spotlight pieces={pieces} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
