import airCarLogo from "./images/air-car-logo.webp";
import diamondLogo from "./images/diamond-logo.webp";
import makroHardLogo from "./images/makro-hard-logo.webp";
import robinwoodLogo from "./images/robinwood-logo.webp";
import swapDoLogo from "./images/swapdo-logo.webp";
import wanNainLogo from "./images/wan-nain-logo.webp";

type LogoItem = {
  src: string;
  alt: string;
};

const logos: LogoItem[] = [
  { src: wanNainLogo, alt: "Wan Nain" },
  { src: robinwoodLogo, alt: "Robinwood" },
  { src: swapDoLogo, alt: "SwapDo" },
  { src: diamondLogo, alt: "Diamond" },
  { src: airCarLogo, alt: "Air Car" },
  { src: makroHardLogo, alt: "Makro Hard" }
];

export { logos };
export type { LogoItem };
