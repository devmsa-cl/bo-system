type Size = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};
const getSize = (size: string) => {
  switch (size) {
    case 'xs':
      return 'h-12 w-12';
    case 'sm':
      return 'h-14 w-14';
    case 'md':
      return 'h-20 w-20';
    case 'lg':
      return 'h-20 w-20';
    case 'xl':
      return 'h-20 w-20';
    case '2xl':
      return 'h-20 w-20';
    default:
      return 'h-16 w-16';
  }
};
export const Avatar = ({ size = 'sm' }: Size) => {
  const avatarSize = getSize(size);
  return (
    <div
      className={`${avatarSize} rounded-full overflow-hidden ring-2 ring-offset-2 ring-primary cursor-pointer`}
    >
      <img
        src="https://councils.forbes.com/profile/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fcco-avatars%2Fd7c78b34-5430-422e-b39b-4e94a24f2059.png&w=384&q=75"
        alt="avatar"
        className="rounded-full"
      />
    </div>
  );
};
