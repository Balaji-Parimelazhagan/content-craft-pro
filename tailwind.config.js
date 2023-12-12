/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Heebo: ["Heebo"],
        BricolageGrotesque: ["Bricolage Grotesque"]
      },
      colors: {
        cyan: {
          500: 'rgb(var(--cyan-500))',
          600: '#129BA3'
        },
        orange: {
          500: '#FF6135',
          600: '#F25022'
        },
        stone: {
          300: '#D0D0D0'
        },
        zinc: {
          100: '#EEEEEE'
        },
        blue: {
          600: '#167EE6'
        },
        teal: {
          900: 'rgb(var(--teal-900))'
        },
        neutral: {
          800: '#202120'
        },
        viola: 'rgb(var(--viola))',
        tacao: 'rgb(var(--tacao))',
        lightSeaGreen: 'rgb(var(--light-sea-green))'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
