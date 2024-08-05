type Props = {
  children: React.ReactNode;
};
export const ButtonFLC = ({ children }: Props) => {
  const val: string = children?.toString() || 'button';
  return (
    <button className="bg-primary hover:scale-95 transition-all text-zinc-100 p-3 px-6 rounded-lg tracking-normal">
      <span className="font-bold text-lg capitalize">{val.slice(0, 1)}</span>
      {val.slice(1)}
    </button>
  );
};
