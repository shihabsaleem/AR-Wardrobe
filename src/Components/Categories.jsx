import React from 'react'
import "./Style/Categories.scss"
import { categories } from '../data'
import ItemCat from './ItemCat'

const Categories = () => {
  return (
    <div>{categories.map(item=>(
      <ItemCat item={item}/>
    ))}</div>
  )
}

export default Categories