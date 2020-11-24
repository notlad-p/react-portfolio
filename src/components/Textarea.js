import React, { useEffect } from 'react';
import { animated } from 'react-spring';
import useInputAnimation from '../hooks/useInputAnimation';

export default function Textarea({ submit }) {
  const { spring, onFocus, onInput, input, onInputBlur, onSubmit } = useInputAnimation();

  useEffect(() => {
    if(submit) onSubmit();
  }, [submit, onSubmit]);

  return (
    <div>
      <animated.label
        className='white-text contact-form-label'
        htmlFor='message'
        style={spring}
      >Message</animated.label>
      <textarea
        name='message'
        id='message'
        required
        className='white-text contact-form-theme contact-form-textarea'
        onFocus={onFocus}
        onBlur={onInputBlur}
        onChange={onInput}
        value={input}
      />
      <span
        style={{
          bottom: /Chrome|Safari/i.test(navigator.userAgent) ? '4px' : '0px'
        }}
      ></span>
    </div>
  )
}