import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
}

const DEFAULT_TITLE = "Fire Prevention & Protection | Cosmic Fire Solutions";
const DEFAULT_DESCRIPTION =
  "Cosmic Fire designs and installs fire prevention and protection systems for homes, businesses and industrial sites. Get a free site assessment today.";

export function useSEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  ogTitle,
  ogDescription,
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
  }, [title, description, ogTitle, ogDescription]);
}
