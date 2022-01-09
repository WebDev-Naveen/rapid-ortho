import { createGlobalStyle } from "styled-components";

import Black from "../assets/fonts/Poppins-Black.ttf";
import Bold from "../assets/fonts/Poppins-Bold.ttf";
import SemiBold from "../assets/fonts/Poppins-SemiBold.ttf";
import Medium from "../assets/fonts/Poppins-Regular.ttf";
import Light from "../assets/fonts/Poppins-Light.ttf";
const FontStyle = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
  src:url(${Medium}) format('truetype');
}
@font-face {
  font-family: 'PoppinsSemiBold';
  src:url(${SemiBold}) format('truetype');
}
@font-face {
  font-family: 'PoppinsBlack';
  src:url(${Black}) format('truetype');
}
@font-face {
  font-family: 'PoppinsBold';
  src:url(${Bold}) format('truetype');
}

@font-face {
  font-family: 'PoppinsLight';
  src:url(${Light}) format('truetype');
}

`;

export default FontStyle;
