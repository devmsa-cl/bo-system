type Prop = {
  children: React.ReactNode[];
};
export const Link = ({ children }: Prop) => {
  if (!Array.isArray(children)) {
    return (
      <div className="link">
        <h2 className="text-2xl text-white font-semibold tracking-wide py-5 capitalize">
          {children}
        </h2>
        <ul className="text-zinc-100 flex flex-col gap-4 font-semibold text-lg"></ul>
      </div>
    );
  }
  return (
    <div className="link">
      <h2 className="text-2xl text-white font-semibold tracking-wide py-5 capitalize">
        {children[0]}
      </h2>
      <ul className="text-zinc-100 flex flex-col gap-4 text-lg font-light">
        {...children.slice(1)}
      </ul>
    </div>
  );
};
