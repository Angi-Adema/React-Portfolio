import { useState } from "react";
import "./App.css";
import Navigation from "./components/navigationBar/NavigationBar";
import Footer from "./components/footer/footer";
import Main from "./components/mainContainer/Main";
import Particles from "./Particles";

export default function App() {
  const [currentPage, setCurrentPage] = useState("HOME");

  return (
    <div className="App">
      <Particles />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        <Main currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

// import { useState } from "react";
// import "./App.css";
// import Navigation from "./components/navigationBar/NavigationBar";
// import Footer from "./components/footer/Footer";
// import Main from "./components/mainContainer/Main";

// export default function App() {
//   const [currentPage, setCurrentPage] = useState("HOME");

//   return (
//     <div className="App">
//       <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
//       <Main currentPage={currentPage} />
//       <Footer currentPage={currentPage} />
//     </div>
//   );
// }
