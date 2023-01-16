import "./App.css";
import Navigation from "./components/navigationBar/NavigationBar";
import Particles from "./Particles";
import Header from "./components/header/Header";
import AboutMe from "./components/aboutMe/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
import ContactMe from "./components/footer/footer";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Particles />
      <AboutMe />
      <Portfolio />
      <ContactMe />
    </div>
  );
}
