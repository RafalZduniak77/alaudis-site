//
//  sitemap.ts
//  
//
//  Created by Rafal Zduniak on 12/04/2026.
//

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alaudis.eu",
      lastModified: new Date(),
    },
    {
      url: "https://alaudis.eu/odkryj-modele",
      lastModified: new Date(),
    },
    {
      url: "https://alaudis.eu/konfigurator",
      lastModified: new Date(),
    },
    {
      url: "https://alaudis.eu/kontakt",
      lastModified: new Date(),
    },
  ];
}
