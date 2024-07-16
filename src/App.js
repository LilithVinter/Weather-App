import "./App.css";

import "./styles.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Weather from "./components/Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Weather/>
        <Footer />
      </div>
    </div>
  );
}
