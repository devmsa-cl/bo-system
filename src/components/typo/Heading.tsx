import "./Heading.css";
type Props = {
  children: React.ReactNode;
};
export const HeadingText = ({ children }: Props) => {
  if (Array.isArray(children)) {
    return (
      <header className="my-6">
        <h2 className="heading-text text-3xl md:text-5xl">{children[0]}</h2>
        {children.slice(1)}
      </header>
    );
  }
  return (
    <header className="my-6">
      <h2 className="heading-text text-3xl">{children}</h2>
    </header>
  );
};
export const HeadingSubText = ({ children }: Props) => {
  return (
    <p className="text-normal text-zinc-800 md:max-w-[600px] text-balance">
      {children}
    </p>
  );
};
