import React, { useMemo } from 'react';
import Image, { ImageProps } from 'next/image';
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
  return (
    <div className="tw-relative tw-w-full" style={{ paddingBottom: `${padding}%` }}>
      <Image {...props} alt={alt} fill />
    </div>
  );
}

export default ImageResize;
