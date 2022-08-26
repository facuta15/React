import React from 'react'
import ItemListContainer from "./ItemListContainer"
import { Routes , Route } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import Cart from './Cart'


const Main = () => {
  return (
    <div>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/detalle/:id" element={<ItemDetailContainer />}/>
                <Route path="/cart/" element={<Cart/>}/>
                <Route path="/cascos" element={<ItemListContainer/>}/>
            </Routes>
    </div>
  )
}

export default Main