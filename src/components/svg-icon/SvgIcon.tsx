import React, { SVGProps } from 'react';

import * as icons from '@/assets/icons';

export type IconKeyPath = keyof typeof icons;

export type SvgIconProps = SVGProps<any> & {
  name: IconKeyPath;
};

function SvgIcon({ name, ...props }: SvgIconProps) {
  const IconSvg = (icons as any)[name] as any;

  return <IconSvg {...props} />;
}
export { SvgIcon };
