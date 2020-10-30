const media = {
  xs: '500px',
  sm: '700px',
  md: '900px',
  lg: '1200px'
};

const font = {
  family: {
    sans: "'Open Sans', cursive",
    serif: ''
  },
  color: {
    lightMode: '#333333',
    darkMode: '#EEEEEE',
    drawer: '#616C7F',
    yellow: '#F9DC5C'
  },
  size: {
    root: '16px',
    sm: '0.8rem',
    normal: '1rem',
    md: '1.5rem',
    lg: '2rem',
    home100: '100px',
    home40: '35px'
  },
  weight: {
    light: '300px',
    normal: '400px',
    bold: '700px'
  },
  lineHeight: {
    normal: '1.8rem'
  },
  letterSpacing: {
    none: '0rem',
    normal: '0.05rem'
  },
  wordSpacing: {
    normal: '0.1rem'
  }
};

const spacing = {
  'full': '100%',
  '0': '0rem',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem'
};

const logo = {
  main: '100',
  navi: '50',
  buger: '40'
};

const theme = { font, media, spacing, logo };

export { theme as default, font, media, spacing, logo };
