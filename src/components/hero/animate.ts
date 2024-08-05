export const animateHeader = {
  initial: { opacity: 0, x: '200px' },
  animate: { opacity: 1, x: '0', transition: { duration: 1 } },
};
export const animateSub = {
  initial: { opacity: 0, x: '-200px' },
  transition: { delay: 0.25 },
  animate: { opacity: 1, x: '0', transition: { duration: 0.75 } },
};
