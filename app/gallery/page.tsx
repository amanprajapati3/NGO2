import GalleryPageLayout from "../components/layout/gallery/Gallery";
import data from "@/data/data.json";
import type { GalleryData } from "@/type/typeSection";

export default function GalleryPage() {
  const gallery = data.gallery as GalleryData;

  return <GalleryPageLayout data={gallery} />;
}
