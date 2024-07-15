import React from 'react';

export default function Preloader() {
  return (
    <div className="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-white tw-bg-opacity-50">
      <div className="preloader">
        <div className="preloader__box">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
