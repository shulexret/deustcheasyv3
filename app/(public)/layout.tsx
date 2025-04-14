import '../globals.css';
import { ReactNode } from 'react';
import Navbar from '../(shared)/components/Navbar';

export const metadata = {
  title: 'Deutsch Web',
  description: 'Aprende alemán de forma interactiva y divertida',
};

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen">
        <Navbar />
        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
