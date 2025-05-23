export default function Page({
  params,
}: {
  params: {
    nivel: string;
  };
}) {
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
