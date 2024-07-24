import Image from 'next/image';

import { MEDIA_ENDPOINT } from '@/common/constants';
import { useVoucherQuery } from '@/services/home/home.query';
import { DataVoucher } from '@/types/home';

const Voucher = () => {
  const handleCopy = (event: any, code: string) => {
    event.preventDefault();
    event.target.innerText = 'Đã sao chép';
    navigator.clipboard.writeText(code);
  };
  const { data, isLoading } = useVoucherQuery();
  return (
    <div id="section_coupons" className="section_coupons">
      <div className="container-coupons">
        <div className="container-content">
          {data?.map((voucher) => {
            return (
              <div key={voucher.id} className="coupon-item">
                <div className="coupon-wrap">
                  <div className="coupon_icon">
                    <Image
                      width={66}
                      height={122}
                      src={`${MEDIA_ENDPOINT}/v2/img/coupon2.svg`}
                      alt=""
                    />
                  </div>
                  <div className="coupon_body">
                    <div className="coupon_head">
                      <h3 className="coupon_title">MÃ: {voucher.code}</h3>
                      <div className="coupon_desc">{voucher.description}</div>
                    </div>
                    <div className="coupon_bot">
                      <button className="coupon_copy" onClick={(e) => handleCopy(e, voucher.code)}>
                        Sao chép
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Voucher;
