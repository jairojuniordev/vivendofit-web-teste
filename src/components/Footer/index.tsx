export function Footer() {
  return (
    <footer className="w-full absolute bottom-0 shadow bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto py-2 md:py-4">
        <span className="block text-sm font-medium text-center text-gray-300">
          © 2024{" "}
          <a href="/" className="font-bold">
            Vivendo<span className="text-yellow-300">Fit</span>
          </a>
          . Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
