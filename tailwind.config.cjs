module.exports = {
  content: ['./dist/*.html', './*.html'],
  theme: {
    fontFamily: {
      sans: ['Urbanist', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      primary: '#8246ff',
      secondary: '#9462ff',
      black1: '#242525',
      black2: '#888888',
      white: '#ffffff',
    },
    extend: {
      spacing: {
        18: '4.5rem',
      },
    },
  },
};

// color: map-get($colors, primary)
// text-primary
// color: #8246ff

// padding-top: map-get($spacing, 18)
// pt-18
// padding-top: 4.5rem

// @media screen and (min-width: map-get($screens, sm)) {
//   body {
//     color: map-get($colors, primary)
//   }
// }

// body class='sm:text-primary'
