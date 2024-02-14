export function NavBar() {
  return (
    <nav className="w-full bg-gray-900 flex py-2 justify-around items-center text-gray-300">
      <div>
        <a href="" className="font-bold text-xl p-2">
          Vivendo<span className="text-yellow-300">Fit</span>
        </a>
      </div>
      <ul className="flex justify-end gap-2 font-bold">
        <li>
          <a href="" className="p-2 rounded bg-gray-800 hover:bg-opacity-60 ">
            Home
          </a>
        </li>
        <li>
          <a href="" className="p-2 rounded bg-gray-800 hover:bg-opacity-60 ">
            Sobre
          </a>
        </li>
        <li>
          <a href="" className="p-2 rounded bg-gray-800 hover:bg-opacity-60 ">
            blog
          </a>
        </li>
      </ul>
    </nav>
  );
}
