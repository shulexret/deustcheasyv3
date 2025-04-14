/'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
        {/* Logo o Título */}
        <div className="font-bold text-lg text-gray-800">
          <Link href="/">Deutsch Web</Link>
        </div>

        {/* Navegación */}
        <nav className="space-x-6">
          <Link
            href="/#comienza"
            className="text-gray-700 hover:text-blue-600 font-semibold"
          >
            Comienza
          </Link>
          <Link
            href="/#"
            className="text-gray-700 hover:text-blue-600 font-semibold"
          >
            Niveles
          </Link>
          <Link
            href="/#"
            className="text-gray-700 hover:text-blue-600 font-semibold"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
