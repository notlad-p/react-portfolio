import { useState } from 'react';
import { useSpring } from 'react-spring';

const useInputAnimation = () => {
  const [input, setInput] = useState('');
  const [focus, setFocus] = useState(false);

  const spring = useSpring({
    top: focus ? '2px' : '20px',
    fontSize: focus ? '12px' : '16px',
    color: focus ? '#29c7ac' : 'rgba(255, 255, 255, 0.6)',
    config: {
      tension: 200, 
      friction: 10,
      clamp: true,
    }
  });

  const onSubmit = () => {
    setFocus(false);
    setInput('');
  }

  const onFocus = () => setFocus(true);

  const onInput = (e) => setInput(e.target.value);

  const onInputBlur = () => {
    if(input === '') {
      setFocus(false)
    }
  }

  return {
    spring,
    onSubmit,
    onFocus,
    onInput,
    onInputBlur,
  }
}

export default useInputAnimation;