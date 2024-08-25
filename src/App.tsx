import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer/index";
import {ImcProvider} from "./components/context";

export default function App() {
  return (
    <ImcProvider>
      <Header />
      <Main />
      <Footer />
    </ImcProvider>
  );
}
