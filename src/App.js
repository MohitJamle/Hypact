import Navigation from "./components/Navbar";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="app_banner2"></div>
      <div className="app_banner"></div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
