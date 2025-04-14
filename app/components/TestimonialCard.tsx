// app/components/TestimonialCard.tsx

interface Props {
  name: string;
  text: string;
  photo?: string;  // URL de la foto (opcional)
}

export default function TestimonialCard({ name, text, photo }: Props) {
  return (
    <div className="bg-blue-50 p-4 rounded-lg shadow-sm flex flex-col items-start space-y-2">
      {photo && (
        <img
          src={photo}
          alt={`Foto de ${name}`}
          className="w-14 h-14 rounded-full object-cover"
        />
      )}
      <p className="text-gray-700 italic">“{text}”</p>
      <p className="font-semibold text-blue-600">{name}</p>
    </div>
  );
}
