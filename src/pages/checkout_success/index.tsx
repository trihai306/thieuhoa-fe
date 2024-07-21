import React from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { MEDIA_ENDPOINT } from '@/common/constants';
import { getAppLayout } from '@/components/layouts';
import { pagesService } from '@/services/pages.service';
import { formatNumber } from '@/utils/number';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { data } = await pagesService.getCheckoutSuccess(query);

  return {
    props: {
      data,
    },
  };
};
function CheckoutSuccess({ data }: any) {
  const { order, metaData, dataLayer } = data;
  const router = useRouter();
  if (!order) {
    router.push('/');
  }
  return (
    <div id="content-order-success">
      <div className="top-content">
        <img src={`${MEDIA_ENDPOINT}/v2/img/Group-1313.png`} alt="" />
        <div className="title">Đặt hàng thành công</div>
      </div>
      <div className="main-order-success">
        <div className="top-main">
          <div className="title-main">Chào {order.customer_name},</div>
          <div className="text1">
            Chúc mừng bạn đã đặt hàng thành công tại <span className="text2">Thiều Hoa</span>
          </div>
          <div className="gr-text">
            <div className="left">Mã đơn hàng:</div>
            <div className="right">{order.id}</div>
          </div>
          <div className="gr-text">
            <div className="left">Phương thức thanh toán:</div>
            <div className="right">Thanh toán khi nhận hàng (COD)</div>
          </div>
          <div className="gr-text">
            <div className="left">Thời gian dự kiến giao hàng:</div>
            <div className="right">3-5 ngày</div>
          </div>
          <div className="gr-text">
            <div className="left">Tổng thanh toán:</div>
            <div className="right total">{formatNumber(order.calc_total_money)} đ</div>
          </div>
          <div className="gr-text">
            <div className="left">Tình trạng:</div>
            <div className="right status">Mới tạo</div>
          </div>
        </div>
        <div className="bottom-main">
          <div className="text1-bt">
            Tên người nhận:<span className="text2-bt">{order.customer_name}</span>
          </div>
          <div className="text1-bt">
            SDT:<span className="text2-bt">{order.customer_phone}</span>
          </div>
          <div className="text1-bt">
            Email:<span className="text2-bt">{order.customer_email}</span>
          </div>
          <div className="text1-bt">
            Địa chỉ:<span className="text2-bt">{order.customer_address}</span>
          </div>
          <p>
            Mọi thông tin về đơn hàng sẽ được gửi đến Zalo của bạn, vui lòng kiểm tra Zalo để biết
            thêm thông tin chi tiết.
          </p>
          <div className="text1-bt">
            Cảm ơn bạn đã tin tưởng và giao dịch tại{' '}
            <span className="text2-bt">thieuhoa.com.vn</span>
          </div>
        </div>
        <Link href="/">
          <div className="btn-continue-buy">
            <span>TIẾP TỤC MUA SẮM</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
CheckoutSuccess.getLayout = getAppLayout;

export default CheckoutSuccess;
