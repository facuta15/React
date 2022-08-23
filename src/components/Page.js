import React from 'react'

const Page = (props) => {
  return (
    <div class="text-center mt-3">
        <h2>{props.titulo}</h2>
        <h3>{props.subtitulo}</h3>
        <div >
            {props.children}
        </div>
    </div>
  )
}

export default Page