import React from 'react'
import ItemListContainer from "./ItemListContainer"
import { Routes , Route } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import Cart from './Cart'
import Categories from './Categories'


const Main = () => {
  return (
    <div>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/detalle/:id" element={<ItemDetailContainer />}/>
                <Route path="/cart/" element={<Cart/>}/>
                <Route path="/cascos" element={<Categories id= {1}/>}/>
                <Route path="/accesorios" element={<Categories id= {2}/>}/>
                <Route path="/repuestos" element={<Categories id= {3}/>}/>
                <Route path="/cubiertas" element={<Categories id= {4}/>}/>
            </Routes>
    </div>
  )
}

export default Main