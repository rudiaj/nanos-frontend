import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body{
  background-color: #f2f3f5;
  font-family: 'Cabin', sans-serif;
  color: #454F55;
  line-height: 1.3;
}

button{
  border: none;
  background:none;
}

td,th{
  vertical-align: top;
}
`;

export default GlobalStyles;
