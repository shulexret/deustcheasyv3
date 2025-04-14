// app/layout.tsx

import './globals.css';       // Importamos Tailwind y estilos globales
import { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Metadata opcional de Next.js:
export const metadata = {
  title: 'Página Web Deutsch',
  description: 'Aprende alemán con un diseño moderno y visual',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-800">
        {/* Encabezado sticky */}
        <Header />
        
        {/* Contenido de la página específica */}
        <main className="mt-[70px]"> {/* Dejamos un margen para que el sticky header no tape el contenido */}
          {children}
        </main>

        {/* Pie de página */}
        <Footer />
      </body>
    </html>
  );
}
