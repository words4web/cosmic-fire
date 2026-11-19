import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  image?: string;
}

const DEFAULT_TITLE = "Fire Prevention & Protection | Cosmic Fire Solutions";
const DEFAULT_DESCRIPTION =
  "Cosmic Fire designs and installs fire prevention and protection systems for homes, businesses and industrial sites. Get a free site assessment today.";
const DEFAULT_IMAGE = "https://www.cosmicfiresolutions.co.uk/logo.png";

export function useSEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  ogTitle,
  ogDescription,
  image = DEFAULT_IMAGE,
}: SEOProps = {}) {
  useEffect(() => {
    // 1. Set document title
    document.title = title;

    // 2. Set Meta Description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement("meta");
      metaDescriptionTag.setAttribute("name", "description");
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.setAttribute("content", description);

    // 3. Set OpenGraph tags
    const targetOgTitle = ogTitle || title;
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (!ogTitleTag) {
      ogTitleTag = document.createElement("meta");
      ogTitleTag.setAttribute("property", "og:title");
      document.head.appendChild(ogTitleTag);
    }
    ogTitleTag.setAttribute("content", targetOgTitle);

    const targetOgDesc = ogDescription || description;
    let ogDescTag = document.querySelector('meta[property="og:description"]');
    if (!ogDescTag) {
      ogDescTag = document.createElement("meta");
      ogDescTag.setAttribute("property", "og:description");
      document.head.appendChild(ogDescTag);
    }
    ogDescTag.setAttribute("content", targetOgDesc);

    // 4. Set OpenGraph Image & Twitter Image
    const fullImageUrl = image.startsWith("http")
      ? image
      : `https://www.cosmicfiresolutions.co.uk${image.startsWith("/") ? "" : "/"}${image}`;

    let ogImageTag = document.querySelector('meta[property="og:image"]');
    if (!ogImageTag) {
      ogImageTag = document.createElement("meta");
      ogImageTag.setAttribute("property", "og:image");
      document.head.appendChild(ogImageTag);
    }
    ogImageTag.setAttribute("content", fullImageUrl);

    let twitterImageTag = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImageTag) {
      twitterImageTag = document.createElement("meta");
      twitterImageTag.setAttribute("name", "twitter:image");
      document.head.appendChild(twitterImageTag);
    }
    twitterImageTag.setAttribute("content", fullImageUrl);
  }, [title, description, ogTitle, ogDescription, image]);
}
