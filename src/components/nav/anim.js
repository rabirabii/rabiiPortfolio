export const menuSlide = {
  initial: { x: "-100%" }, // Start from the left, off-screen
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }, // Slide in to position
  exit: {
    x: "-100%", // Slide back out to the left, off-screen
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: { x: 80 },
  enter: (i) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};
