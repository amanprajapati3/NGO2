import Sitemap from "../components/layout/sitemap/Sitemap";
import data from "@/data/data.json";
import type { SitemapData } from "@/type/typeSection";

export default function SitemapPage() {
  const sitemapData = data.sitemap as SitemapData;

  return <Sitemap data={sitemapData} />;
}
