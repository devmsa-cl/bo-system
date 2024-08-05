import "./NavbarMobile.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { LINKS } from "../../../constants";
import { Logo } from "../../Logo";
export default function NavbarMobile() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      <div className="navbar h-full">
        <div className="container h-full flex items-center justify-between mx-auto px-5">
          <a
            href=""
            className="brand-name text-2xl font-semibold text-secondary font-nunito flex items-center gap-2"
          >
            <Logo />
            Bo systems
          </a>
          <div
            className="menu-collapse cursor-pointer"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{
              x: "400px",
            }}
            animate={{
              x: "0",
              transition: {
                duration: 0.5,
              },
            }}
            exit={{
              x: "400px",
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            className={`menu bg-[#2a2a2a] absolute top-0 w-2/3 right-0 h-screen`}
          >
            <button
              className="navbar-close cursor-pointer top-5 relative left-5"
              onClick={() => setShowMenu(false)}
            >
              <Icon
                icon="iconamoon:close-bold"
                width="32"
                height="32"
                className="text text-zinc-100"
              />
            </button>
            <div className="container p-4 flex justify-center">
              <ul className="menu-items flex flex-col gap-4">
                {LINKS.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className="font-semibold text-2xl text-zinc-100 capitalize"
                    >
                      <a href="#">{link}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
