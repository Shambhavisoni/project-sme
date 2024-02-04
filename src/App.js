import Header from "./shared/components/Header"
import "./App.css"; 
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
           <Header />
      </BrowserRouter>
    </>
  );
}

export default App;
