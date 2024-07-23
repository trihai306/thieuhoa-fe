import { ComponentProps } from 'react';
import NextLink from 'next/link';

const Link: React.FC<ComponentProps<typeof NextLink>> = ({ href, children, ...props }) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <a href={href} {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Link;
