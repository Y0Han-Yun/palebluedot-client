const media = {
  xs: '500px',
  sm: '700px',
  md: '900px',
  lg: '1200px'
};

const font = {
  family: {
    sans: "'Open Sans', sans-serif",
    serif: ''
  },
  color: {
    lightMode: '#333333',
    darkMode: '#EEEEEE'
  },
  size: {
    root: '16px',
    sm: '0.8rem',
    normal: '1rem',
    md: '1.5rem',
    lg: '2rem'
  },
  weight: {
    light: '300',
    normal: '400',
    bold: '700'
  },
  lineHeight: {
    normal: '1.8rem'
  },
  letterSpacing: {
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

const theme = { font, media, spacing };

export { theme as default, font, media, spacing };
