import React from 'react';
import NextImage from 'next/image';

import { getImageUrl } from '@/utils';

export type ImageProps = React.ComponentProps<typeof NextImage>;
const Image: React.FC<ImageProps> = ({ src, ...props }) => {
  return <NextImage src={src} {...props} alt="image" loader={({ src }) => getImageUrl(src)} />;
};

export default Image;
