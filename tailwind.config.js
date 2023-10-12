/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'headersm':'653px',
      'sm':'480px',
      'md':'744px',
      'mdl': '810px',
      'lg':'1040px',
      'al':'1105px',//breakpoint for header
    },
    fontSize: {
      sm: ['16px', '20px'],
      md: ['20px','24px'],
      
      base: ['24px', '26px'], // paragraph
      lg: ['24px', '29px'],
      xl: ['32px', '35px'],
      xxl: ['32px','39px'],
    },
    fontFamily: {
      montserrat : ["Montserrat","sans-serif"],
      julius : ["Julius Sans One", "sans-serif"],      
    },
    extend: {
      height: {
        '294': '294px',
        '274':'274px', //home img
        '100':'100px',//Grillers arrow  if screen is smaller or = to sm
        '150':'150px',// Grillers arrow if screen is bigger than sm
        '250':'250px',//height of grillers chef card
        '230':'230px',//Height of griller dp
        '54':'54px',//griller name div
        '17':'17px',//griller pos title
        '179':'179px',//griller quote
        '285':'285px',
        '62':'62px',//Newsletter button height
      },
      
      width: {
        '458': '458px',// home imgs if screen is smaller or = to sm
        '533': '533px', //home imgs if screen is bigger than sm
        '50':'50px',//Grillers arrow  if screen is smaller or = to sm
        '100':'100px',// Grillers arrow if screen is bigger than sm
        '280':'280px',//width of grillers chef card
        '120':'120px',//Width of grillers dp
        '315':'315px',// menu column width
        '410':'410px',//width of footer cells
        '290':'290px',//Newsletter button width
        '552.5':'552.5px',//smallest homepage
        '1105':'1105px',
        '630':'630px',
        '276.25':'276.25px',
        '410':'410px',
      },
      padding: {
        '27px': '27px',
        '35':'35px',
        '84':'84px',
        '1.725':'1.725px',//padding for the header
        '20':'20px',
      },
      margin : {
        '20':'20px',
        '84':'84px',
      },
      colors: {
        'llb': '#EFEAE5',//light light beige
        'lb': '#DCCBBC',//light beige
         'b': '#CFBCAB',//normal beige
      },
      gap: {
        '103.45':'103.45px',
        '20':'20px',
        '100':'100px'
      },

      top: {
        '69':'69px',
        '104':'104px',
        
      }


    },
  },
  plugins: [],
}