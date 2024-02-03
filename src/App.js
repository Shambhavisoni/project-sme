import Header from "./shared/components/Header"
import "./App.css"; 
import {BrowserRouter} from 'react-router-dom';
import Footer from "./shared/components/Footer.jsx"
import Highligths from "./components/Highligths.jsx";
import { Feedback } from "./components/Feedback.jsx";
import Ngocard from "./components/Ngocard.jsx";
// import Scheme from "./shared/pages/Scheme.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
           <Header />
           {/* <Footer /> */}
           {/* <Highligths/>
           <Ngocard/>
           <Feedback/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
