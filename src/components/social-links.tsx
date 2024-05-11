import { HTMLAttributes } from 'react';
// UI frameworks
import { Instagram, Linkedin, Twitter } from 'lucide-react';
// Utilities
import { cn } from '@/lib/utils';
// Configs
import * as appConfig from '@/config/app';

const mapSocialKeyToIcon = {
  linkedin: <Linkedin />,
  instagram: <Instagram />,
  twitter: <Twitter />,
};

interface Props extends HTMLAttributes<HTMLDivElement> {}

export default function SocialLinks(props: Props) {
  return (
    <div
      {...props}
      className={cn('flex items-center justify-center gap-x-4 sm:justify-start', props.className)}
    >
      {appConfig.socials.map((social) => (
        <a
          key={social.key}
          href={social.href}
          className="text-muted-foreground transition-colors hover:text-foreground"
          target="_blank"
        >
          {mapSocialKeyToIcon[social.key]}
        </a>
      ))}
    </div>
  );
}
