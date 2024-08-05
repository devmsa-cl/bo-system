import Footer from './footer/Footer';
import Hero from './hero/Hero';
import Navbar from './nav/Index';
type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Hero />
      {children}
      <Footer />
    </>
  );
}
