import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VPP Store",
    short_name: "VPP Store",
    description: "Moda feminina para dias reais.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F3EE",
    theme_color: "#173E36",
    lang: "pt-BR",
  };
}
