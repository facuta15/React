import React from 'react'
import ItemListContainer from "./ItemListContainer"
import { Routes , Route } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"

const Main = () => {
  return (
    <div>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/detalle" element={<ItemDetailContainer/>}/>
            </Routes>
    </div>
  )
}

export default Main