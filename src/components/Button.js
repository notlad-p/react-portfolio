import React from 'react';

// Button inspo
  //https://github.com/sw-yx/spark-joy/blob/master/README.md#buttons
  //https://cssbuttons.vercel.app/
  //https://frontend.horse/articles/buttons-that-spark-joy/

export default function Button({ text, type, margin, icon, style }) {

  return (
    <div className='button-container' >
      <button
        className='button'
        type={type}
        style={{
          margin: margin,
          ...style,
        }}
      >
        {text}
        {icon}
      </button>
    </div>
  )
}