export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8c52ff', // violet-500	
          dark: '#5a35a2', // violet-900	
        },
        text: {
          primary: '#1F2937', // gray-800
          secondary: '#6B7280', // gray-500
          link: '#9CA3AF', // gray-400
        },
      },
      spacing: {
        buttonPadding: '0.75rem', // py-3
      },
      width: {
        'login-form': '50%',
        'form-content': '100%',
        'button-large': '65%',
        'button-medium': '45%',
        'button-small': '35%',
        'button-xs': '10%',
      },
      fontSize: {
        heading: '1.5rem', // text-2xl
        body: '0.875rem', // text-sm
      },
    },
  },
  plugins: [],
}