/* @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
import daisyui from "daisyui";
import typography from '@tailwindcss/typography';
import flyonui from 'flyonui'
import flyonuiPlugin from 'flyonui/plugin'
import { fontFamily, padding } from "tailwindcss-classnames";
export const content = ['./index.html', './src/**/!(tailwind).{ts,tsx}', "./node_modules/flyonui/dist/js/*.js"];
export const plugins = [typography, flyonui, flyonuiPlugin];
export const theme = {
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  extend: {
    colors: {
      'orange': { 75: '#FAFCFC', 750: '#362D2A' },
      'yellow': { 850: '#7C4531' },
      'green': { 850: '#2E3F3C' },
      'slate': { 750: '#201D1D' },
      'black': { 0: '#000000' }
    },
    

  }

}