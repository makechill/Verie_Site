import React from "react";
import "./App.css";
import Fifthrow from "./Components/FiifthRow/FifthRow";
import Firstimageslider from "./Components/FirstImageSlider/FirstImageSlider";
import Firstrow from "./Components/FirstRow/FirstRow";
import Fourthrow from "./Components/FourthRow/FourthRow";
import Navbar from "./Components/Navbar/Navbar";
import Secondrow from "./Components/SecondRow/SecondRow";
import SixthRow from "./Components/SixthRow/SixthRow";
import Thirdrow from "./Components/ThirdRow/ThirdRow";

const App = () => {
  return (
    <>
      <Navbar />
      <Firstrow />
      <Secondrow />
      <Firstimageslider />
      <Thirdrow />
      <Fourthrow />
      <Fifthrow />
      <SixthRow />
    </>
  );
};

export default App;
