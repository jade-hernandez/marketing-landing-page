import type { ComponentType } from "react";

import { FacebookIcon } from "./icons/FacebookIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { XIcon } from "./icons/XIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";

type FooterLink = {
  id: string;
  title: string;
  path: string;
};

type FooterIcon = {
  id: string;
  icon: ComponentType;
  label: string;
  href: string;
};

const footerLinks: FooterLink[] = [
  { id: "features-path", title: "Features", path: "/" },
  { id: "pricing-path", title: "Pricing", path: "/" },
  { id: "about-us-path", title: "About Us", path: "/" },
  { id: "contact-path", title: "Contact", path: "/" }
];

const footerIcons: FooterIcon[] = [
  {
    id: "youtube-icon",
    icon: YoutubeIcon,
    label: "Visit Youtube profile",
    href: "https://youtube.com"
  },
  {
    id: "instagram-icon",
    icon: InstagramIcon,
    label: "Visit Instagram profile",
    href: "https://instagram.com"
  },
  {
    id: "facebook-icon",
    icon: FacebookIcon,
    label: "Visit Facebook profile",
    href: "https://facebook.com"
  },
  {
    id: "github-icon",
    icon: GithubIcon,
    label: "Visit Github profile",
    href: "https://github.com"
  },
  { id: "x-icon", icon: XIcon, label: "Visit X profile", href: "https://x.com" }
];

export { footerIcons, footerLinks };
export type { FooterLink, FooterIcon };
