import { useMediaQuery } from 'usehooks-ts';
import NavbarMobile from './mobile/NavbarMobile';
import Navigation from './desktop/Navigation';
export default function Index() {
  const matches = useMediaQuery('(max-width: 640px)'); // mobile version

  return (
    <nav className="fixed top-0 z-50 w-full h-16">
      {matches ? <NavbarMobile /> : <Navigation />}
    </nav>
  );
}
