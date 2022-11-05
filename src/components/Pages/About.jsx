import React, { Fragment } from "react";
import backpup from "../../assets/backpup.jpg";

const About = () => {
  return (
    <Fragment>
      <img src={backpup} className="background" />
      <div className="my-32 mx-4 text-center text tracking-wide">
        Caninepedia has been developed using Dog Api which gets image, points and
        Web Search Api which retrieves information from wikipedia. Check console
        after search for more info.
      </div>
    </Fragment>
  );
};

export default About;
