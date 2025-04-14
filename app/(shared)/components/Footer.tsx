export default function Footer() {
  return (
    <footer className="mt-8 bg-gray-900 text-white py-6">
      <div className="max-w-3xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
        <p className="text-sm">
          © {new Date().getFullYear()} DeutschEasy. Todos los derechos reservados.
        </p>
        <div className="space-x-4 text-sm">
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-blue-400 transition"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-pink-300 transition"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="mailto:you.gosocials@gmail.com"
            className="hover:text-blue-200 transition"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
