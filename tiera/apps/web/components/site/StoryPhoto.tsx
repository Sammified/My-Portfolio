"use client";
import { useEffect, useRef } from "react";

/** Owner photo that hides itself if the file is missing, so the designed fallback shows instead of a broken image. */
export function StoryPhoto({ src }: { src: string }) {
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) img.style.display = "none";
  }, []);
  return (
    <img
      ref={ref}
      data-photo=""
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 1, color: "transparent" }}
    />
  );
}
