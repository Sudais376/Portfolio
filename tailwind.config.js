/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      translate : {
        "upward" : "1px"
      },
      height : {
        "heroHeight" : "600px",
        "aboutHeight" : "600px",
        "cardHeight" : "197px",
        "projectsImageHeight" : "400px",
      },
      maxWidth: {
        "maxOverallWidth" : "1800px",
        "aboutUsMaxWidth" : "1200px",
        "heroParaMaxWidth" : "800px",
        "CardMaxWidth" : "400px",
        "CardWidthMd" : "750px",
        "footerItemMaxWidth" : "45%",
      },
      width : {
        "buttonWidth" : "45%",
        "CardImageWidth" : "750px",
        "formWidth" : "600px",
        "projectsImageWidth" : "1800px",
        "aboutUsImageWidth" : "1800px",
      },
      inset : {
        "aboutTop" : "10%",
        "aboutLeftNormal" : "20%",
        "aboutLeftMedium" : "25%",
        "aboutLeftLarge" : "35%",
      },
      opacity : {
        "heroOpacity" : "0.7",
        "aboutOpacity" : "0.9",
        "aboutHeadingOpacity" : "0.4",
        "aboutParaOpacity" : "0.4",
      },
      brightness : {
        "heroBrightness" : "0.25",
        "aboutBrightness" : "0.25"
      },
      colors: {
        "navBg" : "#1F1F1F",
        "listItemsHoverText" : "#BB86FC",
        "navButtonBg" : "#03DAC6",
        "navButtonHoverBg" : "#BB86FC",
        "heroParaTextColor" : "#E0E0E0",
        "primaryBg" : "#121212",
        "headingAndButtonTextColor" : "#E0E0E0",
        "paragraphsTextColor" : "#B0B0B0",
        "mainJsFirstButtonBg" :  "#03DAC6",
        "mainJsFirstButtonHoverBg" : "#BB86FC",
        "mainJsSecondButtonBg" : "#BB86FC",
        "mainJsSecondButtonHoverBg" : "#03DAC6",

        "contactUsBackground" : "#91eb931a",
        "formBackground" : "#7dd39e",
      },
    },
  },
  plugins: [],
}