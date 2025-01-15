import { Typography } from "@mui/material";
import "../assets/Css/introduction.css";

const Introduction = () => {
  return (
    <div className="intro-container">
      <Typography className="mohd-nadeem">Hello, i'm Mohd Nadeem ッ</Typography>
      <Typography className="intro">
        I'm a <span className="react-js"> React.js developer</span> who
        transforms ideas into engaging web applications, continuously exploring
        the latest technologies to enhance user experience.
      </Typography>
    </div>
  );
};

export default Introduction;
