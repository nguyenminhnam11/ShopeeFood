import { useContext } from 'react';
import './Cart.css'
import { StoreContext } from '../../context/storeContext';

function Cart() {
    const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext)
    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className="cart-items-title">
                    <p>Ảnh</p>
                    <p>Tên món</p>
                    <p>Giá</p>
                    <p>Số lượng</p>
                    <p>Tổng cộng</p>
                    <p>Xóa món</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if(cartItems[item._id]>0) {
                        return (
                            <div key={index} className='cart-items-title cart-items-item'>
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>${item.price*cartItems[item._id]}</p>
                                <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='cart-bottom'>
                <div className="cart-total">
                    <h2>Tổng cộng</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Tạm tính</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Phí gia hàng</p>
                            <p>${2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Tổng cộng</b>
                            <b>${getTotalCartAmount()+2}</b>
                        </div>
                    </div>
                    <button>Tiến hành thanh toán</button>
                </div>
                <div className='cart-promocode'>
                    <div>
                        <p>Nếu bạn có mã giảm giá, hãy nhập mã vào đây</p>
                        <div className='cart-promocode-input'>
                            <input type="text" placeholder='Mã giảm giá' />
                            <button>Dùng ngay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;