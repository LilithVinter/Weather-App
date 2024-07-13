import logo from './logo.svg';
import './App.css';

import "./styles.css";

import Header from "./components/Header";
import Weathers from "./components/Weathers";
import Footer from "./components/Footer";
import Search from "./components/SearchEngine";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Weathers />
      <Footer />
    </div>
  );
}

export default App;
