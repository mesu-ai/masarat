/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'timberGreen': '#1A3D37',
        'blackPearl':'#0F172A',
        'slateBlue':'#657790',
        'lightGreen': '#9BEBA8'
        // 'slateGray':'rgba(15, 23, 42, 0.5);'
      },
      backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-timberGreen': 'gradient-timberGreen(from 102.53deg, #0f241fb3 at 3.7% , #0F241E 102.89% var(--tw-gradient-stops))'
              },
    },
  },
  plugins: [],
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

