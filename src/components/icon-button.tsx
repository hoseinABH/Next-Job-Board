import { ReactNode } from 'react';
// Common components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import { Button, ButtonProps } from './ui/button';
import Maybe from './maybe';

interface Props extends ButtonProps {
  children: ReactNode;
  title?: string;
}

export default function IconButton({
  children,
  className,
  title,
  ...ButtonProps
}: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild className={className}>
          <Button size="icon" variant="ghost" {...ButtonProps}>
            {children}
          </Button>
        </TooltipTrigger>
        <Maybe condition={Boolean(title)}>
          <TooltipContent>
            <p>{title}</p>
          </TooltipContent>
        </Maybe>
      </Tooltip>
    </TooltipProvider>
  );
}
