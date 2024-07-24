import React from 'react';

export default function Preloader() {
  return (
    <div className="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-white tw-opacity-30">
      <div className="preloader-square-swapping">
        <div className="cssload-square-part cssload-square-green"></div>
        <div className="cssload-square-part cssload-square-pink"></div>
        <div className="cssload-square-blend"></div>
      </div>
    </div>
  );
}
