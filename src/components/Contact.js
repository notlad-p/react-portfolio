import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Heading from './Heading';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';

export default function Contact() {
  const [submit, setSubmit] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
     emailjs.sendForm('service_aownkr4', 'template_kx4erxx', e.target, process.env.REACT_APP_EMAILJS_ID)
       .then((result) => {
         console.log(result.text);
       }, (error) => {
         console.log(error.text);
       });
      e.target.reset();

      setSubmit(true);
      setTimeout(() => {
        setSubmit(false);
      }, 1000);
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
    </div>
  )
}