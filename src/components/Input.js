import React, { useEffect } from "react";
import { animated } from "react-spring";
import useInputAnimation from "../hooks/useInputAnimation";

export default function Input({ label, id, type, submit }) {
  const {
    spring,
    onFocus,
    onInput,
    input,
    onInputBlur,
    onSubmit,
  } = useInputAnimation();

  useEffect(() => {
    if (submit) {
      onSubmit();
    } else {
      return;
    }
  }, [submit, onSubmit]);

  return (
    <>
      <div>
        <animated.label
          className="white-text contact-form-label"
          htmlFor={id}
          style={spring}
        >
          {label}
        </animated.label>
        <input
          onFocus={onFocus}
          onBlur={onInputBlur}
          onChange={onInput}
          value={input}
          name={id}
          id={id}
          type={type}
          required
          className="white-text contact-form-theme contact-form-input"
        />
        <span></span>
      </div>
    </>
  );
}
