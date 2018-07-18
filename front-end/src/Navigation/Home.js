
import React from "react";
import Blurb from "./Blurb";
import axios from "axios";
import SearchResults from "./searchResults";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      timerID: 0
    };
  }
  getStores = (input) => {
    axios
      .get(`/search/${input}`)
      .then(resp => {
        console.log("this is the response", resp);
        this.setState({ stores: resp.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  callGetStores = (e) => {
    const input = e.target.value;
    clearInterval(this.state.timerID);
    this.setState({timerID:setTimeout(
      ()=> {this.getStores(input)},
      1000
    )})
  }


  render() {
    const stores = this.state.stores
    return (
      <div>
        <div className="home">
          <div className="home-top-text">
            To explore local businesses click on a category above.
          </div>
          <input
            type="text"
            className="home-search"
            placeholder="Search for a specific business."
            onChange={this.callGetStores}
          />
        </div>
        { stores.length ? <SearchResults stores={stores} /> : <Blurb />}        
      </div>
    );
  }
}

export default Home;
