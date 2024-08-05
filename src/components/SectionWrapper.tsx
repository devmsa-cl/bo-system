import './SectionWrapper.css';
type Props = {
  children: React.ReactNode;
  background?: string;
};
function SectionWrapper({ children, background = 'bg-transparent' }: Props) {
  return (
    <section
      className={`section-wrapper p-4 md:py-32 relative -top-14 ${background}`}
    >
      <div className="section-content">
        <div className="max-w-screen-lg mx-auto">{children}</div>
      </div>
    </section>
  );
}

export default SectionWrapper;
