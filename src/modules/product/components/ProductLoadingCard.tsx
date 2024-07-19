import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

const ProductLoadingCard = () => {
  return (
    <div className="item-list-product">
      <Skeleton className="tw-h-[125px] tw-w-[250px] tw-rounded-xl" />
      <div className="tw-space-y-2">
        <Skeleton className="tw-h-4 tw-w-[250px]" />
        <Skeleton className="tw-h-4 tw-w-[200px]" />
      </div>
    </div>
  );
};

export default ProductLoadingCard;
