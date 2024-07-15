import React from 'react';
const vouchers = [
  {
    id: 14,
    code: 'TH40',
    description: 'Gi\u1ea3m 40k cho \u0111\u01a1n t\u1eeb 399K',
    start_date: '2022-10-01',
    end_date: '2029-12-31',
    from_value: 399000,
    can_used_times: 2000,
    used_times: 967,
    value: 40000,
    value_max: null,
    type: 1,
    status: 5,
    created_at: '2022-10-08T04:41:41.000000Z',
    updated_at: '2024-07-14T07:57:30.000000Z',
    web_status: 5,
    text_title: 'GI\u1ea2M 40K',
  },
  {
    id: 15,
    code: 'TH60',
    description: 'Gi\u1ea3m 60k cho \u0111\u01a1n t\u1eeb 599K',
    start_date: '2022-11-25',
    end_date: '2029-12-31',
    from_value: 599000,
    can_used_times: 2000,
    used_times: 186,
    value: 60000,
    value_max: null,
    type: 1,
    status: 5,
    created_at: '2022-11-26T03:23:25.000000Z',
    updated_at: '2024-07-14T07:24:42.000000Z',
    web_status: 5,
    text_title: 'GI\u1ea2M 60K',
  },
  {
    id: 16,
    code: 'TH100',
    description: 'Gi\u1ea3m 100k cho \u0111\u01a1n t\u1eeb 999K',
    start_date: '2022-11-25',
    end_date: '2029-12-31',
    from_value: 999000,
    can_used_times: 20000,
    used_times: 301,
    value: 100000,
    value_max: null,
    type: 1,
    status: 5,
    created_at: '2022-11-26T03:24:56.000000Z',
    updated_at: '2024-07-14T05:36:01.000000Z',
    web_status: 5,
    text_title: 'GI\u1ea2M 100K',
  },
  {
    id: 20,
    code: 'TH200',
    description: 'Gi\u1ea3m 200k cho \u0111\u01a1n t\u1eeb 1999K',
    start_date: '2023-03-07',
    end_date: '2029-12-31',
    from_value: 1999000,
    can_used_times: 10000,
    used_times: 35,
    value: 200000,
    value_max: null,
    type: 1,
    status: 5,
    created_at: '2023-03-07T09:11:39.000000Z',
    updated_at: '2024-07-12T10:40:00.000000Z',
    web_status: 5,
    text_title: 'GI\u1ea2M 200K',
  },
];

const VoucherItem = ({ voucher }) => {
  return (
    <div className="item-voucher" style={{ cursor: 'pointer' }}>
      <svg
        width={83}
        height={25}
        viewBox="0 0 83 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M79.9568 19.8871C79.9568 18.6394 80.9093 17.6244 82.1 17.5815V14.931C80.9093 14.8865 79.9568 13.8731 79.9568 12.6254C79.9568 11.3777 80.9093 10.3628 82.1 10.3198V7.66933C80.9093 7.62477 79.9568 6.61143 79.9568 5.36374C79.9568 4.11606 80.9093 3.10107 82.1 3.05816V0H0.5V3.05816C0.526988 3.05651 0.552389 3.05321 0.579377 3.05321C1.80655 3.05321 2.80195 4.088 2.80195 5.36374C2.80195 6.63949 1.80655 7.67428 0.579377 7.67428C0.552389 7.67428 0.526988 7.67098 0.5 7.66933V10.3182C0.526988 10.3165 0.552389 10.3132 0.579377 10.3132C1.80655 10.3132 2.80195 11.348 2.80195 12.6238C2.80195 13.8995 1.80655 14.9343 0.579377 14.9343C0.552389 14.9343 0.526988 14.931 0.5 14.9294V17.5782C0.526988 17.5766 0.552389 17.5733 0.579377 17.5733C1.80655 17.5733 2.80195 18.6081 2.80195 19.8838C2.80195 21.1596 1.80655 22.1943 0.579377 22.1943C0.552389 22.1943 0.526988 22.191 0.5 22.1894V25H82.1V22.1894C80.9093 22.1498 79.9568 21.1348 79.9568 19.8871Z"
          fill="#F6F1D4"
        />
      </svg>{' '}
      <span className="text-voucher">{voucher.text_title}</span>{' '}
      <div className="popup-detail-item tw-w-[290px]">
        <div className="title-pop">Tiết kiệm hơn khi áp mã giảm giá</div>{' '}
        <div className="item-voucher-pop">
          <img src="https://thieuhoa.com.vn/v2/img/svg/Subtract.svg" alt="" />{' '}
          <div className="gr-text-pop">
            <div className="left-gr">
              <img src="https://thieuhoa.com.vn/v2/img/lOGO-1.png" alt="" />
            </div>{' '}
            <div className="right-gr">
              <p className="text-title-pop">{voucher.code}</p>{' '}
              <p className="text-voucher-pop">{voucher.description}</p>{' '}
              <p className="text-error-pop">Sắp hết hạn: Còn 8 giờ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductVoucher = ({ vouchers }) => {
  return (
    <div className="gr-voucher">
      {vouchers?.map((voucher) => (
        <VoucherItem key={voucher.id} voucher={voucher} />
      ))}
    </div>
  );
};

export default ProductVoucher;
