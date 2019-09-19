/* @jsx jsx */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';
import theme from '../parts/theme';
import { jsx } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import { requestInterval } from '../parts/utils';

let once = false;
let size = 14;

let special_keys = 'xs?'.split('');

Object.fromEntries = arr =>
  Object.assign({}, ...Array.from(arr, ([k, v]) => ({ [k]: v })));

let KeyTip = props => (
  <span
    sx={{
      border: 'solid 1px black',
      width: '2ch',
      textAlign: 'center',
      display: 'inline-block',
    }}
  >
    {props.children}
  </span>
);
const Home = () => {
  let [dimensions, setDimensions] = useState([null, null]);
  let canvasRef = useRef();
  let overlayCanvasRef = useRef();
  let requestRef = useRef();
  let keymap = useRef({});
  let coordinates = useRef([0, 0]);
  let [help, toggleHelp] = useState(true);

  function keyAction(key, repeat) {
    let canvas_width = Math.floor(window.innerWidth / size) * size;
    let canvas_height = Math.floor(window.innerHeight / size) * size;

    let ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = 'black';

    let octx = overlayCanvasRef.current.getContext('2d');
    octx.strokeStyle = 'hotpink';
    let ostroke = 4;
    octx.lineWidth = ostroke;

    if (special_keys.includes(key)) {
      if (key === 'x' && !repeat) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas_width, canvas_height);
        ctx.fillStyle = 'black';
      } else if (key === 's' && !repeat) {
        let encoded = canvasRef.current.toDataURL('image/png');
        let link = document.createElement('a');
        link.setAttribute('href', encoded);
        link.setAttribute('download', 'etch.png');
        link.dispatchEvent(
          new MouseEvent(`click`, {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );
      } else if (key === '?' && !repeat) {
        toggleHelp(!help);
      }
      return;
    }

    if (key === 'init') {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas_width, canvas_height);
    }

    let current = coordinates.current;

    let inc = size;
    let modify = [0, 0];
    if (keymap.current['j']) modify[1] += inc;
    if (keymap.current['k']) modify[1] += -inc;
    if (keymap.current['h']) modify[0] += -inc;
    if (keymap.current['l']) modify[0] += inc;

    let next = [current[0] + modify[0], current[1] + modify[1]];
    if (next[0] < 0) next[0] = canvas_width - size;
    if (next[0] >= canvas_width) next[0] = 0;
    if (next[1] < 0) next[1] = canvas_height - size;
    if (next[1] >= canvas_height) next[1] = 0;
    coordinates.current = next;

    if (keymap.current['d']) {
      ctx.fillStyle = 'black';
      ctx.fillRect(coordinates.current[0], coordinates.current[1], size, size);
    } else if (keymap.current['e']) {
      ctx.fillStyle = 'white';
      ctx.fillRect(coordinates.current[0], coordinates.current[1], size, size);
    }

    octx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    octx.strokeRect(
      coordinates.current[0] - ostroke / 2,
      coordinates.current[1] - ostroke / 2,
      size + ostroke,
      size + ostroke
    );
  }

  function downHandler(e) {
    keymap.current[e.key] = true;
    keyAction(e.key, e.repeat);
  }

  function upHandler(e) {
    keymap.current[e.key] = false;
  }

  function setWindowSize() {
    let canvas_width = Math.floor(window.innerWidth / size) * size;
    let canvas_height = Math.floor(window.innerHeight / size) * size;
    setDimensions([canvas_width, canvas_height]);
  }

  useEffect(() => {
    setWindowSize();
    if (!once) {
      setTimeout(() => {
        keyAction('init', false);
      }, 0);
      once = true;
    }
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [help]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Etch</title>
        </Head>
        <style jsx global>{`
          * {
            box-sizing: border-box;
          }
          html {
            font-family: ${theme.fonts.body};
            font-size: ${theme.fontSizes[0]}px;
            background: white;
            line-height: ${theme.lineHeights.body};
          }
          body {
            margin: 0;
          }
          textarea {
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
          }
          p {
            margin: 0;
          }
        `}</style>
        <canvas
          ref={canvasRef}
          sx={{ background: 'white' }}
          width={dimensions[0]}
          height={dimensions[1]}
          css={{
            position: 'absolute',
            left: 0,
            top: 0,
            display: dimensions[0] !== null ? 'block' : 'none',
          }}
        />
        <canvas
          ref={overlayCanvasRef}
          sx={{ background: 'transparent' }}
          width={dimensions[0]}
          height={dimensions[1]}
          css={{
            position: 'absolute',
            left: 0,
            top: 0,
            display: dimensions[0] !== null ? 'block' : 'none',
          }}
        />
        <div
          css={{
            display: help ? 'block' : 'none',
            position: 'fixed',
            right: size * 2,
            bottom: size * 2,
            maxWidth: `calc(100% - ${size * 4}px)`,
            padding: size,
            fontSize: size,
            lineHeight: 1.5,
            background: 'rgba(255,255,255,0.8)',
            borderRadius: 4,
            border: 'solid 1px black',
            // boxShadow: '2px 1px 14px rgba(0,0,0,0.3)',
          }}
        >
          <div style={{ marginBottom: size * 1.5 }}>
            <p>Etch is a keyboard-based drawing tool.</p>
          </div>

          <div style={{ marginBottom: size * 1.5 }}>
            <p>Movement</p>
            <p>
              <KeyTip>h</KeyTip> ←&nbsp; <KeyTip>j</KeyTip> ↓&nbsp;{' '}
              <KeyTip>k</KeyTip> ↑&nbsp; <KeyTip>l</KeyTip> →
            </p>
          </div>

          <div style={{ marginBottom: size * 1.5 }}>
            <p>Drawing</p>
            <p>
              <KeyTip>d</KeyTip> draw&nbsp; <KeyTip>e</KeyTip> erase
            </p>
          </div>

          <div style={{ marginBottom: 0 }}>
            <p style={{ marginBottom: 0 }}>Special</p>
            <p>
              <KeyTip>x</KeyTip> clear&nbsp; <KeyTip>s</KeyTip> save as
              png&nbsp; <KeyTip>?</KeyTip> toggle instructions
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
