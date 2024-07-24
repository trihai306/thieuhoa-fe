import React, { useMemo } from 'react';
import Image, { ImageProps } from 'next/image';
interface ImageResizeProps extends Omit<ImageProps, 'alt'> {
  ratio: {
    width: number;
    height: number;
  };
  alt?: string;
}
function ImageResize({ ratio, alt = '', ...props }: ImageResizeProps) {
  const padding = useMemo(() => {
    const { width, height } = ratio;
    return (height / width) * 100;
  }, [ratio]);
  return (
    <div className="tw-relative tw-w-full" style={{ paddingBottom: `${padding}%` }}>
      <Image {...props} alt={alt} fill />
    </div>
  );
}

export default ImageResize;
