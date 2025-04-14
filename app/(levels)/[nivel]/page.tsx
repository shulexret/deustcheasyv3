interface Props {
  params: {
    nivel: string; // A1, A2, B1, B2...
  };
}

export default function NivelPage({ params }: Props) {
  const { nivel } = params;

  return (
    <div>
      <h2 className="text-3xl font-semibold">Nivel: {nivel}</h2>
      <p className="mt-2">
        Aquí irán las unidades y ejercicios para el nivel {nivel}.
      </p>
    </div>
  );
}
