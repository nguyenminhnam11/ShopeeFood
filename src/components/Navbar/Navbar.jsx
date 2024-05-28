import './Navbar.css'
import {assets} from '../../assets/assets'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({setShowLogin}) {
    const [menu, setMenu] = useState("home")

    return (
        <div className='navbar'>
            <Link to={'/'}><img src={assets.logo} alt="logo" className='logo'/></Link>
            <ul className='navbar-menu'>
                <Link onClick={() => setMenu("home")} className={menu==="home"?"active":""}>Trang chủ</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu==="menu"?"active":""}>Thực đơn</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Ứng dụng di động</a>
                <a href='#footer' onClick={() => setMenu("contact-us")}className={menu==="contact-us"?"active":""}>Liên hệ</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="" />
                <div className='navbar-search-icon'>
                    <Link to={'/cart'}><img src={assets.basket_icon} alt="" /></Link>
                    <div className='dot'></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Đăng nhập</button>
            </div>
        </div>
    );
}

export default Navbar;