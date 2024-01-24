import { Monitor, Moon, SunDim } from 'lucide-react';
// Common components
import { Button } from './ui/button';
// Utilities
import { cn } from '@/lib/utils';
// Hooks
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const availableThemes = [
  {
    key: 'dark',
    icon: Moon,
  },
  {
    key: 'system',
    icon: Monitor,
  },
  {
    key: 'light',
    icon: SunDim,
  },
];
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="border rounded-3xl p-1">
      {availableThemes.map((item) => {
        const ThemeIcon = item.icon;
        return (
          <Button
            key={item.key}
            size="icon"
            variant="ghost"
            className={cn('rounded-full', {
              ['bg-muted']: item.key === theme,
            })}
            onClick={() => setTheme(item.key)}
          >
            <ThemeIcon className="w-4 h-4" />
            <p className="sr-only">{item.key}</p>
          </Button>
        );
      })}
    </div>
  );
}
