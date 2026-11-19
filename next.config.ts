import type { NextConfig } from "next";

// Site estático, no padrão da madrugada-pneus: `npm run build` gera a pasta
// `out/`, cujo conteúdo sobe para o public_html da hospedagem. Sem servidor
// Node, o Next não envia cabeçalhos nem otimiza imagens — por isso os
// cabeçalhos de segurança e o cache moram em `public/.htaccess`, e as imagens
// já vão para `public/` no tamanho final.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Permite testar o `next dev` pelo celular no IP da rede local.
  allowedDevOrigins: ["192.168.*.*"],
};

export default nextConfig;
