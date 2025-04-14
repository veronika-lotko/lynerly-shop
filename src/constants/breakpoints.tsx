export const breakpoints = {
  mobile: 480,
  small: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
};

export const mquery = {
  mobile: `@media (min-width: ${breakpoints.mobile}px)`,
  small: `@media (min-width: ${breakpoints.small}px)`,
  tablet: `@media (min-width: ${breakpoints.tablet}px)`,
  laptop: `@media (min-width: ${breakpoints.laptop}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop}px)`,
};
