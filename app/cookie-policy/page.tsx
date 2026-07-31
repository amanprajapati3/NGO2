import CookiePolicy from "../components/layout/cookie/Cookie";
import data from "@/data/data.json";
import type { cookiePolicydata } from "@/type/typeSection";

export default function CookiePolicyPage() {
  const cookie = data.cookie as cookiePolicydata;

  return (
    <>
      <CookiePolicy data={cookie} />
    </>
  );
}
