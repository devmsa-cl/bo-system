type CardProps = {
  children: React.ReactNode[];
  color?: string;
};
const getOutlineCl = (cl: string) => {
  switch (cl) {
    case 'secondary':
      return 'ring-secondary border-secondary/50';
    case 'primary':
      return 'ring-primary border-primary/50';
    case 'tertiary':
      return 'ring-tertiary border-tertiary/50';
  }
};
const getBgCl = (cl: string) => {
  switch (cl) {
    case 'secondary':
      return 'bg-secondary';
    case 'primary':
      return 'bg-primary';
    case 'tertiary':
      return 'bg-tertiary';
  }
};
export const Card = ({ color = 'secondary', children }: CardProps) => {
  return (
    <div
      className={`card bg-white w-full md:max-w-[280px] min-h-[360px] rounded-3xl ring-offset-2 ring-4 border-2 relative overflow-hidden ${getOutlineCl(
        color
      )}`}
    >
      <div className="icons h-32 grid place-items-center">{children[0]}</div>
      <div className="z-10 relative  px-8  flex flex-col justify-center items-center gap-4">
        {children[1]}
        {children[2]}
      </div>

      <div
        className={`bg-lower absolute min-h-64 min-w-full -bottom-5 z-0 -skew-y-6 ${getBgCl(
          color
        )}`}
      ></div>
    </div>
  );
};
type Props = {
  children: React.ReactNode;
};
export const CardIcon = ({ children }: Props) => {
  return <>{children}</>;
};
export const CardTitle = ({ children }: Props) => {
  return (
    <h4 className="text-xl font-semibold  pt-4 px-2 text-white relative">
      {children}
    </h4>
  );
};
export const CardContext = ({ children }: Props) => {
  return <p className="text-normal  text-white">{children}</p>;
};
