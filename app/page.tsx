// app/page.tsx

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-16">
      {/* Sección HERO */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-600">
          ¡Aprendé alemán de manera divertida!
        </h1>
        <p className="text-lg text-gray-700">
          Una plataforma moderna, amigable y visual para que avances en tu dominio del idioma.
        </p>
        <a
          href="#comienza"
          className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition"
        >
          Comienza Ahora
        </a>
      </section>

      {/* Sección DE CARACTERÍSTICAS */}
      <section id="comienza" className="space-y-6">
        <h2 className="text-2xl font-bold text-orange-600">
          ¿Por qué estudiar con nosotros?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Clases interactivas con ejercicios en vivo</li>
          <li>Diseño fresco y minimalista para mantener tu atención</li>
          <li>Gamificación con medallas y recompensas motivadoras</li>
          <li>Material actualizado y vocabulario moderno</li>
        </ul>
      </section>

      {/* Sección TESTIMONIOS */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-blue-600">Testimonios</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Podés reutilizar tu componente <TestimonialCard /> para cada testimonio */}
        </div>
      </section>
    </div>
  );
}
