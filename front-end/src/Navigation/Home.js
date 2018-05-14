import React from "react";



const Home = () => {
    return (
      <div className="home">
      <div className="home-searchbox">
        <input type="text"  className="home-search" placeholder="search.." />      
        <button type="submit" className="home-button"><img src="https://image.ibb.co/n1dBuS/seachbig.png" alt="search icon" /></button>
      </div>
      <div className="home-image"></div>
      <div className="home-description">
      <span>
       <br />      To explore for local businesses click on one of the categories above. <p /> Use the search bar to find a specific business. 
     </span>
      </div> 
    </div>

    );
  };
  
  export default Home;