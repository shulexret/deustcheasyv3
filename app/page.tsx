export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-16">
      {/* SECCIÓN BIENVENIDA */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-600">
          Willkommen a tu nueva forma de aprender alemán
        </h1>
        <p className="text-lg text-gray-700">
          ¿Listo para olvidar esos manuales polvorientos? Aquí aprenderás con
          ejemplos reales y consejos prácticos que te ayudarán a dominar
          expresiones más útiles que un simple “Hallo” (aunque también amamos el “Hallo”).
        </p>
      </section>

      {/* SECCIÓN: POR QUÉ UNIRTE */}
      <section id="comienza" className="space-y-6">
        <h2 className="text-2xl font-bold text-orange-600">¿Por qué unirte?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">Gramática digerible:</span> Nada de enredos, explicaciones claras y concisas.
          </li>
          <li>
            <span className="font-semibold">Vocabulario real:</span> ¡Adiós a las listas eternas! Aprende palabras y frases que sí usarás en Alemania.
          </li>
          <li>
            <span className="font-semibold">Ejercicios con chispa:</span> Pon a prueba lo aprendido con actividades que te entretienen al mismo tiempo.
          </li>
          <li>
            <span className="font-semibold">Gratis, gratis, gratis:</span> Disfruta de todos nuestros recursos sin pagar un solo Euro (o un solo Peso).
          </li>
        </ul>
      </section>

      {/* SECCIÓN: CTA FINAL */}
      <section className="space-y-4">
        <p className="text-lg text-gray-700">
          Empieza ahora y descubre por qué aprender alemán puede ser más fácil
          (y divertido) de lo que imaginabas. ¡Los “Danke” de tus futuros amigos
          alemanes te esperan!
        </p>
        <a
          href="#"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition"
        >
          ¡Empezar ya!
        </a>
      </section>
    </div>
  );
}
