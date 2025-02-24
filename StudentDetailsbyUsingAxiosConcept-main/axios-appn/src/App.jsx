import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Body from "./components/Body"; // UpdateConsumer Form
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/update-consumer" element={<Body />} />
        {/* Additional routes for other components can be added here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
