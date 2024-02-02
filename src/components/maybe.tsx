interface Props {
  children: React.ReactNode;
  condition: boolean;
}
export default function Maybe({ children, condition }: Props) {
  return <>{condition ? children : null}</>;
}
