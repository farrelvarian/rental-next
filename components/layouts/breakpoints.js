import { generateMedia } from "styled-media-query";

export const breakpoints = generateMedia({
  xsm: "460px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
});
