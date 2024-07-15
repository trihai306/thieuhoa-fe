import React from 'react';
import NextImage from 'next/image';

import { getImageUrl } from '@/utils';

export type ImageProps = React.ComponentProps<typeof NextImage>;
const Image: React.FC<ImageProps> = ({ src, ...props }) => {
  // check if src is full url
  if (typeof src === 'string' && src.startsWith('http')) {
    return <NextImage src={src} {...props} alt="image" unoptimized />;
  }

  return (
    <NextImage
      src={src}
      {...props}
      alt="image"
      // unoptimized
      loader={({ src }) => getImageUrl(src)}
    />
  );
};

export default Image;
2;
