import { NavBarLink } from "../NavBarLink";

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
          <NavBarLink link="/" text="Blog" />
          <NavBarLink link="/" text="Exercícios" />
          <NavBarLink link="/" text="Receitas" />
        </li>
      </ul>
    </nav>
  );
}
