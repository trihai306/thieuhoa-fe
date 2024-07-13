import React from 'react';
import Image from 'next/image';

import { MEDIA_ENDPOINT } from '@/common/constants';

export default function ListIcon() {
  return (
    <div className="list-icon-fix">
      <a href="tel:18009246">
        <Image width={50} height={50} src={`${MEDIA_ENDPOINT}/v2/img/svg/phone.svg`} alt="phone" />
      </a>
      <a href="https://www.messenger.com/t/1889518347796003">
        <Image
          width={50}
          height={50}
          src={`${MEDIA_ENDPOINT}/v2/img/svg/pngwing-60.svg`}
          alt="phone"
        />
      </a>
      <a href="https://zalo.me/388030919384134642">
        <Image
          width={50}
          height={50}
          src={`${MEDIA_ENDPOINT}/v2/img/svg/pngwing-61.svg`}
          alt="zalo"
        />
      </a>
    </div>
  );
}
