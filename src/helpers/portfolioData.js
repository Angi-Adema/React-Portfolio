import truckDB from "../images/projectsicon/truckDbSS.png";
import mvcBlog from "../images/projectsicon/mvcTechBlogSS.png";
import socialNetwork from "../images/projectsicon/socialNetworkSS.png";
import teamProfile from "../images/projectsicon/team-profile-managerSS.png";
import textEditor from "../images/projectsicon/textEditorSS.png";
import weatherApp from "../images/projectsicon/weatherappSS.png";

const portfolioData = [
  {
    image: truckDB,
    link: "https://calm-stream-98427.herokuapp.com/",
    title: "Truck Database",
    summary: "An app to look up and locate trucks and parts.",
    tech: "MySQL/MySQL2 | Node.js/Express.js | Sequelize | JavaScript",
  },
  {
    image: mvcBlog,
    link: "https://guarded-peak-34864.herokuapp.com/",
    title: "Tech Blog",
    summary: "A blog with posts regarding new technology.",
    tech: "MySQL/MySQL2 | Node.js/Express.js | Sequelize | Handlebars.js | JavaScript",
  },
  {
    image: socialNetwork,
    link: "https://github.com/Angi-Adema/Social-Network-API",
    title: "Back-End Social Network API",
    summary: "This app is the back-end piece for a social network API.",
    tech: "NoSQL | Node.js/Express.js | MongoDB/Mongoose | JavaScript",
  },
  {
    image: teamProfile,
    link: "https://github.com/Angi-Adema/Team-Profile-Manager",
    title: "Team Profile",
    summary:
      "Built for testing, an app for managers to store their team profiles.",
    tech: "Node.js/Express.js | Jest | JavaScript",
  },
  {
    image: textEditor,
    link: "https://angi-text-editor.herokuapp.com/",
    title: "PWA Text-Editor",
    summary:
      "This app will store text whether the application is on or off-line (PWA)",
    tech: "Node.js/Express.js | Webpack | JavaScript",
  },
  {
    image: weatherApp,
    link: "https://angi-adema.github.io/Weather-App/",
    title: "Weather App",
    summary: "App created so the user can view a 5 day forcast for any city.",
    tech: "JavaScript | Weather API",
  },
];

export default portfolioData;
