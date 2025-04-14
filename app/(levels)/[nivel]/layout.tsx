import { ReactNode } from 'react';

export default function NivelLayout({ children }: { children: ReactNode }) {
  return (
    <section className="mt-6 mx-auto max-w-3xl">
      {/* Podés poner aquí un título o barra de progreso del nivel */}
      {children}
    </section>
  );
}
