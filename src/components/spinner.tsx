'use client';
// UI Frameworks
import { ThreeDots } from 'react-loader-spinner';

interface Props {
  color?: string;
}

export default function Spinner({ color = 'black' }: Props) {
  return <ThreeDots visible={true} height="100%" width={40} radius="9" color={color} />;
}
