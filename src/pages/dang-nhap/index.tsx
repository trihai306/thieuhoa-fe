
import { getAppLayout } from '@/components/layouts';
import { NextPageWithLayout } from '@/types';

const UserPage: NextPageWithLayout = () => {
  return (
    <>
      <div id="user-page">
        <div className="login-form">
          <div className="login-form-layout">
            <div className="login-layout">
              <div className="content">
                <div className="title">Đăng nhập</div>
                <form action="/login.phone_submit" method="POST" id="form-phone-login">
                  <input type="hidden" name="_token" />
                  <div className="input-group">
                    <input type="text" name="phone" id="login-phone" placeholder="Số điện thoại" />
                  </div>
                  <div className="input-group">
                    <button className="btn-login" type="submit">
                      Đăng nhập với số điện thoại
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

UserPage.getLayout = getAppLayout;

export default UserPage;
