import truckDB from "../images/projectsicon/semiTruckSS.png";
import eCommerce from "../images/projectsicon/ecommerceSS.png";
import socialNetwork from "../images/projectsicon/socialNetworkSS.png";
import teamProfile from "../images/projectsicon/teamProfileSS.png";
import textEditor from "../images/projectsicon/textEditorSS.png";
import weatherApp from "../images/projectsicon/weatherAppSS.png";

const portfolioData = [
  {
    image: truckDB,
    link: "https://calm-stream-98427.herokuapp.com/",
    github: "https://github.com/TuinderJ/Vehicle-Reference",
    title: "Truck Database",
    summary:
      "An app to look up and locate trucks and parts. Enter #272171 to view data",
    tech: "MySQL/MySQL2 | Node.js/Express.js | Sequelize | JavaScript",
  },
  {
    image: eCommerce,
    link: "https://turnip-the-zine.herokuapp.com/",
    github: "https://github.com/madisenvo/Turnip-the-Zine",
    title: "Turnip-the-Zine",
    summary:
      "Full stack application with ecommerce for local bands to sell tickets and merchandise.",
    tech: "GraphQL / Apollo | Node.js/Express.js | JavaScript",
  },
  {
    image: socialNetwork,
    link: "https://github.com/Angi-Adema/Social-Network-API",
    github: "https://github.com/Angi-Adema/Social-Network-API",
    title: "Back-End Social Network API",
    summary:
      "This app is the back-end piece for a social network API. No front-end - NOT DEPLOYED",
    tech: "NoSQL | Node.js/Express.js | MongoDB/Mongoose | JavaScript",
  },
  {
    image: teamProfile,
    link: "https://github.com/Angi-Adema/Team-Profile-Manager",
    github: "https://github.com/Angi-Adema/Team-Profile-Manager",
    title: "Team Profile",
    summary:
      "Built for testing, an app for managers to store their team profiles.",
    tech: "Node.js/Express.js | Jest | JavaScript",
  },
  {
    image: textEditor,
    link: "https://angi-text-editor.herokuapp.com/",
    github: "https://github.com/Angi-Adema/The-Text-Editor",
    title: "PWA Text-Editor",
    summary:
      "This app will store text whether the application is on or off-line (PWA)",
    tech: "Node.js/Express.js | Webpack | JavaScript",
  },
  {
    image: weatherApp,
    link: "https://angi-adema.github.io/Weather-App/",
    github: "https://github.com/Angi-Adema/Weather-App",
    title: "Weather App",
    summary: "App created so the user can view a 5 day forcast for any city.",
    tech: "JavaScript | Weather API",
  },
];

export default portfolioData;
