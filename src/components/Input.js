import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'

export default function Input({ label, id, type }) {
  const [input, setInput] = useState('');
  const [name, setName] = useState(false);

  const spring = useSpring({
    top: name ? '2px' : '20px',
    fontSize: name ? '12px' : '16px',
    color: name ? '#29c7ac' : 'rgba(255, 255, 255, 0.6)',
    config: {
      tension: 200, 
      friction: 10,
      clamp: true,
    }
  })

  const onInputBlur = () => {
    if(input === '') {
      setName(false)
    }
  }

  return (
    <>
      <div>
        <animated.label
          className='white-text contact-form-label'
          htmlFor={id}
          style={spring}
        >{label}</animated.label>
        <input 
          onFocus={() => setName(true)}
          onBlur={onInputBlur}
          onInput={(e) => setInput(e.target.value)}
          name={id} 
          id={id}
          type={type}
          required
          className='white-text contact-form-theme contact-form-input'
        ></input>
        <span></span>
      </div>
    </>
  )
}