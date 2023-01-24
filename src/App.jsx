import { GlobalStyle } from "./styles/globalStyle";
import CustomTheme from "./context/CustomTheme";
import Quote from "./components/Quote";
import Footer from "./components/Footer";

export default function App() {
  return (
    <CustomTheme>
      <GlobalStyle />
      <Quote />
      <Footer />
    </CustomTheme>
  );
}
