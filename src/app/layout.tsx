import type { Metadata, Viewport } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { SITE_URL, CRP_NUMBER } from '../constants/links';
import Providers from './Providers';

const DESCRICAO =
  `Giovana Frassetto, psicóloga clínica (${CRP_NUMBER}) no bairro Auxiliadora, Porto Alegre. Psicoterapia e avaliação psicológica, presencial e online, para crianças, adolescentes e adultos. Agende pelo WhatsApp.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Psicóloga em Porto Alegre | Giovana Frassetto – Presencial e Online',
  description: DESCRICAO,
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: '48x48' }, { url: '/favicon.png', type: 'image/png' }],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Giovana Frassetto Psicologia',
    title: 'Psicóloga em Porto Alegre | Giovana Frassetto',
    description: 'Psicoterapia e avaliação psicológica na Auxiliadora (Porto Alegre) e online. Agende pelo WhatsApp.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

const DADOS_ESTRUTURADOS = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Giovana Frassetto – Psicóloga',
  url: SITE_URL,
  logo: `${SITE_URL}favicon.png`,
  image: `${SITE_URL}og-image.jpg`,
  description: 'Psicoterapia e avaliação psicológica presencial em Porto Alegre e online.',
  telephone: '+55-51-99393-8789',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Augusto Meyer, 40',
    addressLocality: 'Porto Alegre',
    addressRegion: 'RS',
    postalCode: '90550-110',
    addressCountry: 'BR',
  },
  areaServed: 'Porto Alegre',
  sameAs: [
    'https://www.instagram.com/psigiovanafrassetto',
    'https://www.linkedin.com/in/giovana-frassetto-425743291/',
  ],
  founder: {
    '@type': 'Person',
    name: 'Giovana Guasque Frassetto',
    jobTitle: 'Psicóloga Clínica',
    hasCredential: { '@type': 'EducationalOccupationalCredential', name: CRP_NUMBER },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(DADOS_ESTRUTURADOS) }}
        />
      </body>
    </html>
  );
}
