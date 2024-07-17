import { MEDIA_ENDPOINT } from '@/common/constants';
import { DataVoucher } from '@/types/home';

interface VoucherProps {
  vouchers: DataVoucher[];
}
const Voucher = ({ vouchers }: VoucherProps) => {
  const handleCopy = (event: any, code: string) => {
    event.preventDefault();
    event.target.innerText = 'Đã sao chép';
    navigator.clipboard.writeText(code);
  };
  return (
    <div id="section_coupons" className="section_coupons">
      <div className="container-coupons">
        <div className="container-content">
          {vouchers.map((voucher) => {
            return (
              <div key={voucher.id} className="coupon-item">
                <div className="coupon-wrap">
                  <div className="coupon_icon">
                    <img src={`${MEDIA_ENDPOINT}/v2/img/coupon2.svg`} alt="" />
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
