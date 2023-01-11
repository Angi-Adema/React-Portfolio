import "./App.css";
import Navigation from "./screens/navigationBar/NavigationBar";
import Particles from "./Particles";
import Header from './screens/header/Header';

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Particles />
    </div>
  );
}
