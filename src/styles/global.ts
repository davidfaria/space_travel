import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: url('img/background.jpg') no-repeat center center fixed;
    background-size: cover;
    &::before {
      content: '';
      background-color: rgba(0, 0, 0, 0.37);

    }
  }

  :root {

    --button-text: #fff;
    --button-primary: #007bff;
    --button-primary-hover: #0069d9;
    --button-primary-border: #0062cc;


    /** Global */
    --background: #121214;
    --text: #87868b;
    --placeholder: #4c4c50;
    --border: #515151;
    --backgroun-icon-hover: rgba(255, 255, 255, 0.3);

    /** Input */
    --background-input: #202024;
    /* --border-input: #202024; */
    --border-input: #3498db;
    --selected-input: #3498db;

     /** Loader */
     --border-loading-active: #007bff;
    --border-loading: #e6e6e6;


  }
`

export default GlobalStyles
