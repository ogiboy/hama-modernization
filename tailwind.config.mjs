/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInScale: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeInScale: 'fadeInScale 0.5s ease-in-out',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        mainColor: '#044d82',
      },
      backgroundImage: {
        buildingDark: 'url(/building-dark.png)',
        softblueBg: "url('/home-slider-images/softblue-bg.png')",
        dividerWhite: "url('/divider-white.png')",
        dividerDark: "url('/divider-dark.png')",
        whiteWave: "url('/white-small-wave.png')",
        blackWave: "url('/black-wave.png')",
        aboutUs: "url('/aboutus.png')",
      },
      fontFamily: {
        robotoSlab: ['var(--font-roboto-slab)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
