import { createTheme } from '@codedoc/core/transport';


export const theme = /*#__PURE__*/createTheme({
  light: {
    background: 'rgba(225,228,232)',           // --> CSS color string, background of the page
    text: '#000',            // --> CSS color string, color of text
    primary: '#000',             // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: 'rgba(225,228,232)',      // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(0,0,0,0.2)',               // --> CSS color string, border colors
    code: '#000',                  // --> CSS color string, in-text code color
  },
  dark: {
    background: 'rgba(42,42,42)',            // --> CSS color string, background of the page
    text: '#eee',              // --> CSS color string, color of text
    primary: '#eee',            // --> CSS color string, primary color (for buttons, links, etc)
    primaryContrast: 'rgba(42,42,42)',    // --> CSS color string, text color on primary background (e.g. buttons)
    border: 'rgba(255,255,255,0.2)',      // --> CSS color string, border colors
    code: '#eee',                  // --> CSS color string, in-text code color
  },
  quote: {
    dark: {
      background: 'rgba(42,42,42)', 
      text: '#eee', 
      border: 'rgba(255,255,255,0.2)',
    },
    light: {
      background: 'rgba(225,228,232)',
      text: '#000',
      border: 'rgba(0,0,0,0.2)',
    },
  },
  toc: {                                 
    light: {
      background: 'rgba(225,228,232,0.4)',             // --> CSS color string, background of ToC
      border: 'rgba(0,0,0,0.2)',                 // --> CSS color string, border of ToC
    },
    dark: {
      background: 'rgba(42,42,42,0.4)',             // --> CSS color string, background of ToC
      border: 'rgba(255,255,255,0.2)',                // --> CSS color string, border of ToC
    },             
  },
});
