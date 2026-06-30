import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import Menu from "./pages/Menu";
import OrderOnline from "./pages/OrderOnline";

import "@fontsource/markazi-text";
import "@fontsource/karla";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <div className="app_content">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/reservations" element={<Reservation/>} />
          <Route path="/about" element={<AboutPage/>}/>     
          <Route path="/menu" element={<Menu/>}/>   
          <Route path="/order-online" element={<OrderOnline/>}/>   
        </Routes>
      </Router>
    </div>
  );
}

export default App;
