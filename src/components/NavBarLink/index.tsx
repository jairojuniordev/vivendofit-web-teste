interface NavBarLinkProps {
  link: string;
  text: string;
}

export function NavBarLink(props: NavBarLinkProps) {
  return (
    <a href={props.link || ""} className="p-2 hover:text-gray-400 ">
      {props.text}
    </a>
  );
}
