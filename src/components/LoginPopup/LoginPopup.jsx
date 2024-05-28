import { useState } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets';

function LoginPopup({setShowLogin}) {
    const [currState, setCurrState] = useState("Đăng nhập")
    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className='login-popup-inputs'>
                    {currState==="Đăng nhập"?<></>:<input type="text" placeholder='Tên' required/>}
                    <input type="email" placeholder='Email' required/>
                    <input type="password" placeholder='Mật khẩu' required/>
                </div>
                <button>{currState==="Đăng ký"?"Create account":"Đăng Nhập"}</button>
                <div className='login-popup-condition'>
                    <input type="checkbox" required />
                    <p>Tôi đồng ý với các điều khoản và chính sách của ứng dụng</p>
                </div>
                {currState==="Đăng nhập"?<p>Tạo mới tài khoản? <span onClick={() => setCurrState("Đăng ký")}>Đăng ký</span></p>:<p>Đã có tài khoản? <span onClick={() => setCurrState("Đăng nhập")}>Đăng nhập</span></p>}
                
                
            </form>
        </div>
    );
}

export default LoginPopup;