import React, { useEffect } from 'react';

import { getAppLayout } from '@/components/layouts';
import { NextPageWithLayout } from '@/types';

const UserOtpPage: NextPageWithLayout = () => {
  return (
    <div id="user-page">
      <div className="login-form">
        <div className="login-form-layout">
          <div className="login-layout">
            <div className="content">
              <div className="title">Đăng nhập</div>
              <form action="/login/user_otp_submit" method="POST" id="form-phone-login">
                <input type="hidden" name="_token" />
                <div className="input-group">
                  <span style={{ marginBottom: '10px' }}>
                    Nhập mã OTP gửi đến điện thoại của bạn
                  </span>
                </div>
                <div className="input-group">
                  <input type="text" name="otp" placeholder="Mã OTP" />
                </div>
                <div className="input-group">
                  <button className="btn-login" type="button">
                    Đăng nhập
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
UserOtpPage.getLayout = getAppLayout;
export default UserOtpPage;
