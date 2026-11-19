import type { NextConfig } from "next";

// Hospedado na Vercel; o export estático gera HTML pronto com todo o conteúdo
// (bom para Google e robôs de IA). https e www são configurados no painel de domínios da Vercel.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Permite testar o `next dev` pelo celular no IP da rede local.
  allowedDevOrigins: ["192.168.*.*"],
};

export default nextConfig;
