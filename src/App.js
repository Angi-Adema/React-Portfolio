import  { useState } from "react";
import "./App.css";
import Navigation from "./components/navigationBar/NavigationBar";
import Particles from "./Particles";
import Header from "./components/header/Header";
import Main from "./components/mainContainer/Main";

export default function App() {
  const [currentPage, setCurrentPage] = useState("HOME");

  return (
    <div className="App">
      <Navigation setCurrentPage={setCurrentPage}/>
      <Main currentPage={currentPage}/>
    </div>
  );
}
