/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'timberGreen': '#1A3D37',
        'blackPearl': '#0F172A',
        'slateBlue': '#657790',
        'lightBlue': '#BDD5FF',
        'lightGreen': '#9BEBA8',
        'thinGreen': '#E6FAE9',
        'mercury': '#E5EAF1',
        'whiteGreen': '#F7FDF8',
        'slateGray': '#AFAFAF',
        'offWhite': '#F6F7FB',
        'lightwhite': '#EDEDED'

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-timberGreen': 'gradient-timberGreen(from 102.53deg, #0f241fb3 at 3.7% , #0F241E 102.89% var(--tw-gradient-stops))'
      },

      boxShadow: {
        'deepShadow': ' 11px 22px 64px rgba(0, 0, 0, 0.15)',
        'lightShadow': '2px 4px 64px rgba(35, 40, 105, 0.14)'

      },
      truncate: {
        lines: {
          4: '4',
          2:'2',
        },
      },
      scale: {

      }


    },
  },
  // important: true,
  plugins: []

  // future: {
  //   // add support for CSS transforms
  //   removeDeprecatedGapUtilities: true,
  //   purgeLayersByDefault: true,
  //   defaultLineHeights: true,
  //   standardFontWeights: true,
  //   applyComplexClasses: true,
  //   layerOrdering: true,
  //   extendTailwindCss: true,
  //   compatibility: {
  //     transform: true,
  //   },
  // },
}

