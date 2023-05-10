import Hero from "./sections/Hero";
import Quote from "./sections/Quote";
import PhoneModel from "./sections/PhoneModel";
import { GlobalStyle } from "./styles/GlobalStyles";
import Design from "./sections/Design";
import Display from "./sections/Display";
import Processor from "./sections/Processor";
import Battery from "./sections/Battery";
import Color from "./sections/Color";
import Camera from "./sections/Camera";
import Price from "./sections/Price";
import { ColorContextProvider } from "./context/ColorContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
      <PhoneModel />
      <Hero />
      <Design />
      <Display />
      <Processor />
      <Battery />
      <ColorContextProvider>
      <Color />
      <Camera />
      <Price />
      </ColorContextProvider>
    </>
  );
}

export default App;
