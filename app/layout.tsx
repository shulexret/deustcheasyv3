import './globals.css';
import { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Opcional: metadata para SEO
export const metadata = {
  title: 'Página Web Deutsch',
  description: 'Aprende alemán con un diseño moderno y visual',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-800">
        <Header />
        {/* Dejar margen para que el header sticky no tape el contenido */}
        <main className="mt-[70px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
