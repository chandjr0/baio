import { SITE_URL, type PageSeo } from "@/data/seo";

export function absoluteUrl(path: string) {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

export function buildPageHead(
  page: PageSeo,
  extra?: { scripts?: { type: string; children: string }[] },
) {
  const canonical = absoluteUrl(page.path);
  const ogImage = page.ogImage ?? `${SITE_URL}/og-image.svg`;

  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      { name: "keywords", content: page.keywords },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:site_name", content: "BaioHack" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: "BaioHack — The calm layer beneath the noise" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: page.title },
      { name: "twitter:description", content: page.description },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: "BaioHack — The calm layer beneath the noise" },
    ],
    links: [{ rel: "canonical", href: canonical }],
    ...(extra?.scripts ? { scripts: extra.scripts } : {}),
  };
}
