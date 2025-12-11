import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Manos a la Obra Construcciones S.A.',
  description: 'Empresa constructora líder en Buenos Aires. Obras llave en mano, reformas y dirección de obra.',
  icons: {
    icon: [
      { url: '/images/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-body text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}

