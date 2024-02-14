'use client';
// UI Frameworks
import { ThreeDots } from 'react-loader-spinner';
// Hooks
import { useTheme } from 'next-themes';

interface Props {
  buttonChild?: boolean;
}
export type Theme = 'dark' | 'light';
const mapThemeToButtonSpinnerColor: Record<Theme, string> = {
  dark: 'black',
  light: 'white',
};
const mapThemeToSpinnerColor: Record<Theme, string> = {
  dark: 'white',
  light: 'black',
};

export default function Spinner({ buttonChild = false }: Props) {
  const { theme } = useTheme();
  const buttonColor = mapThemeToButtonSpinnerColor[theme as Theme];
  const defaultColor = mapThemeToSpinnerColor[theme as Theme];
  const spinnerColor = buttonChild ? buttonColor : defaultColor;
  return (
    <ThreeDots
      visible={true}
      height="100%"
      width={40}
      radius="9"
      color={spinnerColor}
    />
  );
}
