import React from "react";

const Blurb = () => {
  return (
    <div>
      <div className="blurb">
        Creating a centralized resource for information on local
        businesses, resources and activities on Roosevelt Avenue.
      </div>
      <div className="blurbGrid">
      <div className="leftImage"><img src="https://image.ibb.co/eyrZ7T/web.png" alt="web"/></div>
      <div className="middleImage"><img src="https://image.ibb.co/eE7Su8/customers.png" alt="customer" /></div>
      <div className="rightImage"><img src="https://image.ibb.co/k4koZ8/stores.png" alt="stores"/></div> 
      <div className="left"> Helping mom
        and pop stores obtain an online pressance. </div>
      <div className="middle">Introducing new neighbors to local stores and services. </div>
      <div className="right">Educate small business owners on free web resources. </div>
    </div>
    </div>
  );
};

export default Blurb;
