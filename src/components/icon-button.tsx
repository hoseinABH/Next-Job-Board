import { ReactNode } from 'react';
// Common components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import { Button, ButtonProps } from './ui/button';

interface Props extends ButtonProps {
  children: ReactNode;
  title?: string;
}

export default function IconButton({ children, title, ...ButtonProps }: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="ghost" {...ButtonProps}>
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
