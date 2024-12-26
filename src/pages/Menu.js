import React from 'react';
import "../styles/menu.css";
import MenuItem from "../component/MenuItem"
import {MenuList} from "../help/MenuList"
function Menu() {
  return (
    <div className="menu">
      <h1 className='menuTitle'>Our PiZZA Menu</h1>
      <div className='menuList'>
        {MenuList.map((item, key) => {
          return (<MenuItem
          key = {key}
          image={item.image}
          name = {item.name}
          price = {item.price}/>)
         
        })}
      </div>
      
    </div>
  )
}

export default Menu
