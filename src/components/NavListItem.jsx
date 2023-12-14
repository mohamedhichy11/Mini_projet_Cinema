import React from 'react'
import "./navListItem.css"
function NavListItem({nav , navOnclick}) {
  return (
    <li>
        <a href={nav.link} 
        onClick={()=>{navOnclick(nav._id)}}
        className={`${nav.active ? "active" : undefined}`}
        >{nav.name}
        </a>
    </li>
  )
}

export default NavListItem
