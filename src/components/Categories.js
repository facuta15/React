import React from 'react'
import ItemListContainer from './ItemListContainer';
import Page from './Page'

const Categories = ({id}) => {
    
    let nombreCategoria;
    let categoriaDescripcion;
    switch(id){
        case 1: nombreCategoria = "Cascos";
                categoriaDescripcion = "Encuentre cascos al mejor precio"
                break;
        case 2: nombreCategoria = "Accesorios";
            categoriaDescripcion = "Encuentre su accesorio al mejor precio"
        break;
        case 3: nombreCategoria = "Repuestos";
            categoriaDescripcion = "Encuentre cualquier repuesto"
        break;
        case 4: nombreCategoria = "Cubiertas";
            categoriaDescripcion = "Encuentre cubiertas para su moto"
        break;
        default: break;
    }
    console.log(nombreCategoria)
  return (
    <Page titulo= {nombreCategoria} subtitulo = {categoriaDescripcion}>
        <ItemListContainer idCategoria = {id} ></ItemListContainer>
    </Page>
  )
}

export default Categories