import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import CustomProvider from "./CustomProvider";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CustomProvider>
          <Header />
          <Main />
          <Footer />
        </CustomProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
