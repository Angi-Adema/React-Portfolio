import "./App.css";
import Navigation from "./screens/navigationBar/NavigationBar";
import Particles from "./Particles";
import Header from "./screens/header/Header";
import AboutMe from "./screens/aboutMe/AboutMe";
import Portfolio from "./screens/portfolio/Portfolio";
import ContactMe from "./screens/contactMe/ContactMe";


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
