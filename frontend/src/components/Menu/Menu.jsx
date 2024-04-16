import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'

const Menu = ({category, setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim repellat dolores blanditiis provident perferendis quos, velit exercitationem porro debitis, illum, aliquam sequi modi ea corrupti autem aliquid. Ex, delectus?</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default Menu
