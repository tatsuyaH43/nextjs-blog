import NextLink, { LinkProps } from 'next/link';
import { baseStyle, hoverUnderlineStyle } from '@/components/Link/Link.css';
import clsx from 'clsx';

type Props = {
  /** 子要素 */
  children: React.ReactNode;
  /** hover時のunderline */
  isHoverUnderline?: boolean;
} & LinkProps;

export const Link = ({ children, isHoverUnderline = true, ...props }: Props) => {
  return (
    <NextLink className={clsx(baseStyle, isHoverUnderline && hoverUnderlineStyle)} {...props}>
      {children}
    </NextLink>
  );
};
