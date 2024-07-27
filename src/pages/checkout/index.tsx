import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { getAppLayout } from '@/components/layouts';
import { checkoutService } from '@/services/checkout/checkout.service';
import { ResponseShippingType } from '@/types/checkout';
import { DataVoucher } from '@/types/home';
import { getCartTotal } from '@/utils/cart';

import FormCheckout from './components/form-checkout';
export const getServerSideProps: GetServerSideProps = async () => {
  const { data: dataVoucher } = await checkoutService.getCouponList();
  const { data: dataShip } = await checkoutService.getShipInfo();
  return {
    props: {
      dataVoucher,
      dataShip,
    },
  };
};
interface CheckoutProps {
  dataVoucher: DataVoucher[];
  dataShip: ResponseShippingType;
}
export default function Checkout({ dataVoucher, dataShip }: CheckoutProps) {
  const [isCartEmpty, setIsCartEmpty] = useState<boolean>(true);
  useEffect(() => {
    const total = getCartTotal();
    if (total > 0) {
      setIsCartEmpty(false);
    }
  }, []);
  if (isCartEmpty) {
    return (
      <div className="tw-flex tw-justify-center tw-pt-10">
        <span className="tw-text-xl tw-font-bold">Chưa có sản phẩm nào trong giỏ hàng!</span>
      </div>
    );
  }
  return (
    <div className="tw-pb-12">
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
            <FormCheckout couponApi={dataVoucher} dataShip={dataShip} />
          </div>
        </div>
      </div>
    </div>
  );
}
Checkout.getLayout = getAppLayout;
