import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ContextProvider } from "./Components/utils/global.context"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home"
import Detail from './Routes/Detail';


function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/destist/:id" element={<Detail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
