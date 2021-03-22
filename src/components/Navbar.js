import React, { useState, useRef } from "react";
import {
  useSpring,
  animated,
  useTrail,
  useChain,
  useSprings,
} from "react-spring";
import { House, Code, Envelope } from "phosphor-react";
import { Link } from "react-scroll";
import useWindowWidth from "../hooks/useWindowWidth";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const { width } = useWindowWidth();

  const loadRef = useRef();
  const loadSpring = useSpring({
    ref: loadRef,
    to: async (next) => {
      await next({ width: "75px" });
      await next({ height: "60px" });
      await next({ opacity: 1 });
    },
    from: {
      height: "0px",
      width: "0px",
      opacity: 0,
    },
    delay: 4500,
    config: {
      tension: 300,
      clamp: true,
    },
  });

  const iconData = [
    {
      el: (
        <>
          <House size={36} color="#ffffff" className="navbar-icon" />
          <span></span>
        </>
      ),
      to: "header",
    },
    {
      el: (
        <>
          <Code size={36} color="#ffffff" className="navbar-icon" />
          <span></span>
        </>
      ),
      to: "projects",
    },
    {
      el: (
        <>
          <Envelope size={36} color="#ffffff" className="navbar-icon" />
          <span></span>
        </>
      ),
      to: "contact",
    },
  ];

  const iconRef = useRef();
  const iconTrail = useTrail(iconData.length, {
    ref: iconRef,
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-25px)" },
    config: {
      tension: 250,
    },
  });

  useChain([loadRef, iconRef]);

  const menuProps = useSpring({
    menuLeft: menu ? "translate3d(-100vw, 0, 0)" : "translate3d(100vw, 0, 0)",
    config: {
      tension: 160,
      clamp: true,
    },
  });

  const items = [
    {
      opacity: 1,
      width: "50px",
      transform: "rotate(-45deg)",
      tension: 50,
    },
    {
      opacity: 1,
      width: "50px",
      transform: "rotate(45deg)",
      tension: 100,
    },
  ];

  const springsRef = useRef();
  const hamSprings = useSprings(
    items.length,
    items.map((item) => ({
      ref: springsRef,
      from: {
        display: "none",
        width: "0px",
      },
      to: async (next) => {
        await next({
          display: menu ? "block" : "none",
        });
        await next({
          width: menu ? item.width : "0px",
        });
        await next({
          transform: menu ? item.transform : "rotate(0deg)",
        });
      },
      config: {
        tension: 300,
        clamp: true,
      },
    }))
  );

  const trailRef = useRef();
  const hamTrail = useTrail(3, {
    ref: trailRef,
    to: {
      opacity: menu ? 0 : 0.87,
    },
    config: {
      tension: 250,
    },
  });

  useChain(menu ? [trailRef, springsRef] : [springsRef, trailRef], [0, 0.5]);

  return (
    <animated.nav
      className="navbar"
      style={{
        height: width < 800 ? loadSpring.height : "100%",
        width: width < 800 ? "100%" : loadSpring.width,
      }}
    >
      <animated.div
        className="navbar-btns"
        style={{
          transform: width < 800 ? menuProps.menuLeft : "translate3d(0, 0, 0)",
        }}
      >
        {iconTrail.map((trail, index) => (
          <animated.div style={trail} key={index}>
            <Link
              to={iconData[index].to}
              smooth={true}
              offset={width < 800 ? -120 : 0}
              className="navbar-link"
            >
              {iconData[index].el}
            </Link>
          </animated.div>
        ))}
      </animated.div>

      <animated.div
        className="hamburger"
        onClick={() => setMenu((state) => !state)}
        style={{
          opacity: loadSpring.opacity,
        }}
      >
        {hamTrail.map((animation, index) => (
          <animated.span style={animation} key={index}></animated.span>
        ))}

        {hamSprings.map((animation, index) => (
          <animated.span style={animation} key={index}></animated.span>
        ))}
      </animated.div>
    </animated.nav>
  );
}