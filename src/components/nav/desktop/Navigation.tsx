import { useRef } from "react";
import { Logo } from "../../Logo";
import { LINKS } from "../../../constants";
export default function Navigation() {
  const navRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const handleScroll = () => {
    if (window.scrollY > 665) {
      navRef.current?.classList.add("bg-primary/20", "backdrop-blur-sm");
      ulRef.current?.classList.replace("text-zinc-100", "text-zinc-700");
    } else {
      navRef.current?.classList.remove("bg-primary/20", "backdrop-blur-sm");
      ulRef.current?.classList.replace("text-zinc-700", "text-zinc-100");
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <div className="navbar h-16 p-5" ref={navRef}>
      <div className="max-w-screen-lg mx-auto flex items-center ">
        <a
          href=""
          className="brand-name text-2xl font-semibold text-secondary font-nunito flex items-center gap-2"
        >
          <Logo />
          Bo systems
        </a>
        <ul className="flex ml-20 gap-4 text-zinc-100" ref={ulRef}>
          {LINKS.map((link, index) => {
            return (
              <li key={index} className="text-x font-medium capitalize">
                <a href="#">{link}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
