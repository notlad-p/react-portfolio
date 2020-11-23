import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { XCircle, CheckCircle } from 'phosphor-react';
import emailjs from 'emailjs-com';
import Heading from './Heading';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';

export default function Contact() {
  const [submit, setSubmit] = useState(false);
  const [result, setResult] = useState();

  const sendEmail = (e) => {
    e.preventDefault();
      emailjs.sendForm('service_aownkr4', 'template_kx4erxx', e.target, process.env.REACT_APP_EMAILJS_ID)
        .then((result) => {
          console.log(result.status);
          if (result.status === 200) {
            setResult(true);
            setSubmit(true);
          } 
        }, (error) => {
          console.log(error);
          if (error.status === 400) {
            setResult(false);
            setSubmit(true);
          }
        });
      e.target.reset();
  
      setTimeout(() => {
        setSubmit(false);
      }, 2000);
  }

  const transition = useTransition(submit, null, {
    from: {
      opacity: 0,
      transform: 'translate3d(0px, 100px, 0)',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0px, 0px, 0)',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(-100px, 0, 0)',
    }
  })

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
        onSubmit={sendEmail}
      >
        <Input label='Name' id='name' type='text' submit={submit} />
        <Input label='Email' id='email' type='email' submit={submit} />
        <Textarea submit={submit} />
        <Button
          text='Submit'
          type='submit'
          margin='0'
        />
      </form>
      {transition.map(({ item, key, props }) => {
        const notification = result ? <animated.div 
            className='submit-notification' 
            key={key} 
            style={props} 
          >
            <CheckCircle 
              size={24} 
              color='#29c7ac'
            />
            <p className='white-text' >Sent!</p>
          </animated.div> : 
          <animated.div 
            className='submit-notification' 
            key={key} 
            style={{
              boxShadow: '0px 0px 10px #fd3f3f',
              ...props,
            }} 
          >
            <XCircle 
              size={32} 
              color='#fd3f3f'
            />
            <p className='white-text' >Failed</p>
          </animated.div>;
          return item && notification;
        }
      )}
    </div>
  )
}