
import './App.css';
import Header from './Header';
import { BrowserRouter } from "react-router-dom";
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
            <Header />
            <Main/>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
