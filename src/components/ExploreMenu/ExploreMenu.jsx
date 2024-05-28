import { menu_list } from '../../assets/assets';
import './ExploreMenu.css'
function ExploreMenu({category, setCategory}) {

    return (

        <div className='explore-menu' id='explore-menu'>
            <h1>Khám phá ấm thực</h1>
            <p className='explore-menu-text'>Chọn thực đơn đa dạng phong phú bao gồm nhiều món ăn ngon. Sứ mệnh của chúng tôi là giúp bạn thưởng thức các món ăn ngon và nâng cao trải nghiệm ăn uống của bạn</p>
            <div className='explore-menu-list'>
                {menu_list.map((item, index)=>{
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    );
}


export default ExploreMenu;