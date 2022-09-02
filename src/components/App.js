import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import CustomProvider from "./CustomProvider";
import "../firebase" 
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <CustomProvider>
          <Header />
          <Main />
          <Footer />
        </CustomProvider>
        <ToastContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
