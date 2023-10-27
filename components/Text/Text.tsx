import { textStyles } from '@/components/Text/Text.css';

type Props = {
  children: React.ReactNode;
};

export const Text = ({ children }: Props) => {
  return <p className={textStyles.base}>{children}</p>;
};
