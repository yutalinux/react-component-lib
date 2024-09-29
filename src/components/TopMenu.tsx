import "./TopMenu.css";

export interface TopMenuProps {
  children?: JSX.Element | JSX.Element[];
}

export function TopMenu(props: TopMenuProps) {
  return (
    <nav className="h-10 bg-neutral-200 shadow-[#0005]">
      <div className="h-10 flex justify-between max-w-3xl items-center mx-auto px-8">
        <a href="/">
          {/* <img src="/icon.png" className="h-8 rounded-md" /> */}
        </a>
        <ul className="flex gap-8">{props.children}</ul>
        {/* <div></div> */}
      </div>
    </nav>
  );
}

export interface TopMenuItemProps {
  href: string;
  children?: JSX.Element | JSX.Element[] | string;
}

export function TopMenuItem(props: TopMenuItemProps) {
  return (
    <li>
      <a href={props.href}>{props.children}</a>
    </li>
  );
}
