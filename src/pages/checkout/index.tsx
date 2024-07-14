import React from 'react';
import Head from 'next/head';

import { getAppLayout } from '@/components/layouts';

import QuickCheckout from './components/form-checkout';

export default function Checkout() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/vue-select@3.0.0/dist/vue-select.css" />
      </Head>
      <div id="main-pay">
        <div id="content-pay">
          <div className="top-content">
            <div className="bread-cumbs">
              <ul>
                <li className="">Giỏ hàng</li>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 9.5L5.5 5.5L1.5 1.5"
                    stroke="#222222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <li className="active">Thanh toán</li>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 9.5L5.5 5.5L1.5 1.5"
                    stroke="#222222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <li>Hoàn thành đơn hàng</li>
              </ul>
            </div>
            <div className="dropdown-filter"></div>
          </div>
          <div>
            <QuickCheckout />
          </div>
        </div>
      </div>
    </div>
  );
}
Checkout.getLayout = getAppLayout;
