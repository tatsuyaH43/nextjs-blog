import { textStyles } from '@/components/Text/Text.css';
import clsx from 'clsx';

type Props = {
  /** 子要素 */
  children: React.ReactNode;
  /** タグの指定 */
  tag?: 'p' | 'span' | 'em';
  /** font-weightの指定 */
  weight?: keyof typeof textStyles.weight;
  /** font-sizeの指定 */
  size?: keyof typeof textStyles.size;
};

export const Text = ({ children, weight, tag = 'p', size }: Props) => {
  const Tag = tag;

  return (
    <Tag className={clsx(textStyles.base, weight ? textStyles.weight[weight] : '', size ? textStyles.size[size] : '')}>
      {children}
    </Tag>
  );
};
