import logo from './logo.svg';
import './App.css';

import "./styles.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/SearchEngine";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
