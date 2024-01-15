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
      className={cn('flex items-center justify-center sm:justify-start gap-x-4', props.className)}
    >
      {appConfig.socials.map((social) => (
        <a
          key={social.key}
          href={social.href}
          className="text-muted-foreground hover:text-foreground transition-colors"
          target="_blank"
        >
          {mapSocialKeyToIcon[social.key]}
        </a>
      ))}
    </div>
  );
}
