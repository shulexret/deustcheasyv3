export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center py-10 text-center space-y-4">
      <h1 className="text-4xl font-bold">¡Bienvenid@ a Deutsch Web!</h1>
      <p className="text-lg max-w-md">
        Aprendé alemán de manera interactiva, con ejercicios, medallas y más.
      </p>
      <a
        href="/A1"
        className="px-6 py-3 bg-acento text-white rounded-md hover:opacity-80 transition"
      >
        Empezar nivel A1
      </a>
    </section>
  );
}
