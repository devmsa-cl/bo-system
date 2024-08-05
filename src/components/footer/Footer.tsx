import "./Footer.css";
import { Logo } from "../Logo";
import { Link } from "./Link";
export default function Footer() {
  return (
    <footer className="footer h-auto relative bg-[#2a2a2a]">
      <div className="footer-container h-full p-10 relative z-30 max-w-screen-lg mx-auto">
        <div className="text-center flex justify-center items-center flex-col">
          <Logo size="md" />
          <h2 className="text-2xl text-zinc-100 uppercase font-nunito font-semibold">
            bo system
          </h2>
        </div>
        <div className="mt-12 foot-nav flex flex-col items-center gap-6 text-center md:gap-20 md:flex-row md:items-start">
          <Link>
            Homeowner
            <li>
              <a href="#">Electronic</a>
            </li>
            <li>
              <a href="#">Heating</a>
            </li>
            <li>
              <a href="#">Cooling</a>
            </li>
            <li>
              <a href="#">Plumbing</a>
            </li>
            <li>
              <a href="#">Solar</a>
            </li>
            <li>
              <a href="#">Special</a>
            </li>
          </Link>
          <Link>
            Builder
            <li>
              <a href="#">Solar Trades</a>
            </li>
            <a href="#">HVAC Trades</a>
            <li>
              <a href="#">Plumbing Trades</a>
            </li>
            <li>
              <a href="#">commercial</a>
            </li>
          </Link>
          <Link>
            resource
            <li>
              <a href="#">Privacy and policy</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">contact us</a>
            </li>
          </Link>

          <Link>
            About us
            <li>
              <a href="#">Our missionary</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </Link>
        </div>
      </div>
    </footer>
  );
}
