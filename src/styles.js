export const colors = {
  white: "255, 255, 255",
  black: "0, 0, 0",
  dark: "34, 34, 34",
  mediumGrey: "221, 221, 221",
  lightGrey: "238, 238, 238",
  darkGrey: "128, 128, 128",
  blue: "97, 218, 251",
  yellow: "246, 203, 71",
  green: "79, 180, 128",
  red: "221, 69, 65"
};

export const fonts = {
  small: "12px",
  medium: "14px",
  large: "16px",
  h1: "30px",
  h2: "28px",
  h3: "24px",
  h4: "18px",
  h5: "16px"
};

export const transitions = {
  short: "all 0.1s ease-in-out",
  base: "all 0.2s ease-in-out",
  long: "all 0.3s ease-in-out"
};

export const responsive = {
  xs: {
    min: "min-width: 319px",
    max: "max-width: 320px"
  },
  sm: {
    min: "min-width: 599px",
    max: "max-width: 600px"
  },
  md: {
    min: "min-width: 899px",
    max: "max-width: 900px"
  },
  lg: {
    min: "min-width: 1199px",
    max: "max-width: 1200px"
  }
};

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Lato, sans-serif;
    font-weight: 400;
    font-size: ${fonts.medium};
    color: rgb(${colors.dark});
    position: relative;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box !important;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border-style: none;
    line-height: 1em;
  }

  button:active,
  button:focus,
  button.active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }
`;
