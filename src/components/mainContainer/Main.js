import AboutMe from "../aboutMe/AboutMe";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import Portfolio from "../portfolio/Portfolio";

export default function Main({currentPage}) {
 

  const renderPage = () => {
    if (currentPage === "HOME") {
      return <Home />;
    }
    if (currentPage === "ABOUT ME") {
      return <AboutMe />;
    }
    if (currentPage === "PORTFOLIO") {
      return <Portfolio />;
    }
    return <Contact />;
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}
