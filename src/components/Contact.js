import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';

export default function Contact() {
  const [input, setInput] = useState('');
  const [name, setName] = useState(false);

  const inputSpring = useSpring({
    top: name ? '2px' : '22px',
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
    <div
      className='section'
      id='contact'
    >
      <div
        className='contact-heading'
      >
        <div>
          <Heading 
            text='Contact'
            color='#007ACC'
            width='120px'
          />
        </div>
        <div className='email-container' >
          <a
            className='email-link'
            href='mailto:daperkins123@gmail.com'
          >
            <h3 
              className='grey-text' 
              style={{
                margin: '15px 0 4px 0'
              }}
            >
              contact@daltonp.com
            </h3>
            <div
              style={{
                width: '100%',
                height: '2px',
                backgroundColor: '#007acc',
                boxShadow: '0px 0px 10px #007acc',
              }}
            ></div>
          </a>
        </div>
      </div>
      <form
        className='contact-form'
      >
        <Input label='Name' id='name' type='text' />
        <Input label='Email' id='email' type='email' />
        <div>
          <animated.label
            className='white-text contact-form-label'
            htmlFor='message'
            style={inputSpring}
          >Message</animated.label>
          <textarea
            name='message'
            id='message'
            required
            className='white-text contact-form-theme contact-form-textarea'
            onFocus={() => setName(true)}
            onBlur={onInputBlur}
            onInput={(e) => setInput(e.target.value)}
          ></textarea>
          <span
            style={{
              bottom: /Chrome|Safari/i.test(navigator.userAgent) ? '4px' : '0px'
            }}
          ></span>
        </div>
        <Button
          text='Submit'
          type='submit'
          margin='0'
        />
      </form>
    </div>
  )
}