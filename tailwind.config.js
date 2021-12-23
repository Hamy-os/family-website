const colors = require('tailwindcss/colors')
module.exports = {
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
   },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: [
    'light',
    'dark',
    'cupcake',
    'bumblebee', 
    'emerald', 
    'corporate', 
    'synthwave', 
    'retro', 
    'cyberpunk', 
    'valentine', 
    'halloween', 
    'garden', 
    'forest', 
    'aqua', 
    'lofi', 
    'pastel', 
    'fantasy', 
    'wireframe', 
    'black', 
    'luxury', 
    'dracula', 
    'cmyk'
      ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}