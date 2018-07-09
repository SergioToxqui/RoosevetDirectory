import React from "react";

const Blurb = () => {
  return (
    <div>
      <div className="blurb">
        Trying to create a centralized resource for information on local
        businesses, resources and activities on Roosevelt Avenue.
      </div>
      <div className="blurbGrid">
      <div className="leftImage"><img src="https://image.ibb.co/k3HXsT/web.jpg" alt="web"/></div>
      <div className="middleImage"><img src="https://image.ibb.co/k1g3z8/customer.jpg" alt="customer" /></div>
      <div className="rightImage"><img src="https://image.ibb.co/bWNnRo/store.jpg" alt="stores"/></div> 
      <div className="left"> Helping mom
        and pop stores obtain an online pressance. </div>
      <div className="middle">Introducing new neighbors to local stores and services. </div>
      <div className="right">Educate small business owners on free web resources. </div>
    </div>
    </div>
  );
};

export default Blurb;
