import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #333333;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans|Open+Sans&display=swap');

  html
  {
    font-size: 10px;
    font-family: "Open Sans";
  }

  h1
  {
    font-family: "Josefin Sans";
    text-align: center;
    font-size: 4rem;
    font-weight: 100;
    margin: 2rem 0;
    letter-spacing: -1px;
  }

  .file-list
  {
    border: none;
    width: 50%;
    min-width: 600px;
    margin: 0 auto;
    display: grid;
  }

  .file-listing
  {
    float: left;
    display: flex;
    height: 30px;
    background: #eef;
    width: 100%;
  }

  .file-listing:hover > .file-button-div
  {
    display: block;
  }

  .file-listing:hover
  {
    background: #dde;
  }

  .file-name
  {
    font-size: 18px;
    padding: 0;
    margin: auto 0;
  }

  #delete-all
  {
    height: 40px;
    display: flex;
    color: #fdd;
    font-size: 20px;
    text-align: center;
  }

  #export-all
  {
    height: 40px;
    display: flex;
    font-size: 20px;
  }

  .file-button
  {
    margin: 0;
    margin-left: 1px;
    border-radius: 0;
    display: block;
    float: left;
    height: 100%;
    background: #ccd;
  }

  .file-button-div
  {
    margin-left: auto;
    margin-right: 0;
    display: none;
    height: 100%;
  }

  button
  {
    background: #222;
    border: none;
    color: white;
    padding: 5px;
    display: block;
  }

  .button-div
  {
    width: 50%;
    min-width: 600px;
    margin: auto;
    display: block;
  }

  .button-big
  {
    display: block;
    float: left;
    width: 50%;
    border: solid white 2px;
    background-color: #ccd;
  }

  button:hover
  {
    background: #333;
  }

  .button-text
  {
    margin: auto;
  }

  .info-container
  {
    display: none;
    padding: 5px;
    background: #f5f5ff;
  }

  .file-container
  {
    margin: 2px;
    border: 1px solid black;
  }

  .file-container:hover .info-container
  {
    display: block;
  }

  .checkbox-cont {
    height: 30px;
    width: 30px;
    text-align: center;
    vertical-align: middle;
  }
`;

export default GlobalStyle;
