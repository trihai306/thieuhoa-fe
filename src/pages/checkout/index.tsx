import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { getAppLayout } from '@/components/layouts';
import Meta from '@/components/Meta';
import { useAppSelector } from '@/redux';
import { checkoutService } from '@/services/checkout/checkout.service';
import { ResponseShippingType } from '@/types/checkout';
import { DataVoucher } from '@/types/home';
import { forceUpdateCart } from '@/utils/cart';

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
  const cartCount = useAppSelector((state) => state.cart.count);
  useEffect(() => {
    if (cartCount <= 0) {
      forceUpdateCart([]);
    }
  }, [cartCount]);
  if (cartCount <= 0) {
    return (
      <>
        <Meta />
        <div className="tw-flex tw-justify-center tw-pt-10">
          <span className="tw-text-xl tw-font-bold">Chưa có sản phẩm nào trong giỏ hàng!</span>
        </div>
      </>
    );
  }
  return (
    <>
      <Meta />
      <div className="tw-pb-12">
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
    </>
  );
}
Checkout.getLayout = getAppLayout;
