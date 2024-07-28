import React, { SyntheticEvent, useCallback, useMemo } from 'react';
import Image, { ImageProps } from 'next/image';

import { MEDIA_ENDPOINT } from '@/common/constants';
interface ImageResizeProps extends Omit<ImageProps, 'alt'> {
  aspect: {
    x: number;
    y: number;
  };
  alt?: string;
}
function ImageResize({ aspect, alt = '', ...props }: ImageResizeProps) {
  const padding = useMemo(() => {
    const { x, y } = aspect;
    return (y / x) * 100;
  }, [aspect]);
  const ImageWithFallback = useCallback((e: any) => {
    e.target.onerror = null;
    e.target.src = `${MEDIA_ENDPOINT}/images/image-thumb.svg`;
  }, []);
  return (
    <div className="tw-relative tw-w-full" style={{ paddingBottom: `${padding}%` }}>
      <Image {...props} alt={alt} fill onError={ImageWithFallback} />
    </div>
  );
}

export default ImageResize;
