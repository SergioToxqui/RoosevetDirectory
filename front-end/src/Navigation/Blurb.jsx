import React from "react";

const Blurb = () => {
  return (
    <div className="blurb">
      <div className="blurb__text">
        A directory for information on local
        businesses, resources, and activities on Roosevelt Avenue.
      </div>
      <div className="blurb__images">
        <div className="leftImage"><img src="https://image.ibb.co/eyrZ7T/web.png" alt="web" /></div>
        <div className="middleImage"><img src="https://image.ibb.co/eE7Su8/customers.png" alt="customer" /></div>
        <div className="rightImage"><img src="https://image.ibb.co/k4koZ8/stores.png" alt="stores" /></div>
        <div className="left"> Helping mom and pop stores<br /> obtain an online presence. </div>
        <div className="middle">Introducing new neighbors to <br />  local stores and services. </div>
        <div className="right">Educating small business owners<br />  on free web resources. </div>
      </div>
    </div>
  );
};

export default Blurb;
