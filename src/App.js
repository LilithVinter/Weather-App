import "./App.css";

import "./styles.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Weather defaultCity="Copenhagen" />
        <Forecast/>
        <Footer />
      </div>
    </div>
  );
}
