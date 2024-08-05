type Size = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};
const getSize = (size: string) => {
  switch (size) {
    case 'xs':
      return 'h-5 w-5';
    case 'sm':
      return 'h-8 w-8';
    case 'md':
      return 'h-12 w-12';
    case 'lg':
      return 'h-16 w-16';
    case 'xl':
      return 'h-20 w-20';
    case '2xl':
      return 'h-24 w-24';
  }
};
export const Logo = ({ size = 'xs' }: Size) => {
  return <img src="/logo.svg" alt="logo" className={`${getSize(size)}`} />;
};
