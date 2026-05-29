import type { ComponentType } from "react";
import { DownloadIcon } from "./icons/DownloadIcon";
import { BrushIcon } from "./icons/BrushIcon";
import { CopyrightIcon } from "./icons/CopyrightIcon";
import { DollarIcon } from "./icons/DollarIcon";
import { PeopleIcon } from "./icons/PeopleIcon";
import { LoopIcon } from "./icons/LoopIcon";

export type FeatureCardData = {
  icon: ComponentType;
  title: string;
  content: string;
};

export type FeatureCardProps = FeatureCardData;

export const cardsData: FeatureCardData[] = [
  {
    icon: DownloadIcon,
    title: "Infinite Download",
    content:
      "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more."
  },
  {
    icon: BrushIcon,
    title: "Purely Handcrafted",
    content:
      "No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust."
  },
  {
    icon: CopyrightIcon,
    title: "All Are Under licensed",
    content:
      "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper)."
  },
  {
    icon: DollarIcon,
    title: "Cancel Anytime",
    content: "Subscribe at your own pace, and cancel when you feel it's enough."
  },
  {
    icon: PeopleIcon,
    title: "Empowering For Team",
    content: "We support multiple seats at once, requiring only a single payment."
  },
  {
    icon: LoopIcon,
    title: "No Limitations",
    content: "Use as many as you want, from Dribbble presentations to PowerPoint presentations."
  }
];
