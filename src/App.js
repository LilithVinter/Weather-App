import "./App.css";

import "./styles.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/SearchEngine";
import Weather from "./components/Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Search />
        <Weather/>
        <Footer />
      </div>
    </div>
  );
}
