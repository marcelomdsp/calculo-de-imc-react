import Header from "./components/header/index.tsx";
import Main from "./components/section/index.tsx";
import Footer from "./components/footer/index.tsx";
import {ImcProvider} from "./components/context/index.tsx";

export default function App() {
  return (
    <ImcProvider>
      <Header />
      <Main />
      <Footer />
    </ImcProvider>
  );
}
