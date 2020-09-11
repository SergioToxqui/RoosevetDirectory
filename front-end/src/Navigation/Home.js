
import React from "react";
import Blurb from "./Blurb";
import axios from "axios";
import SearchResults from "./searchResults";
import { css } from '@emotion/core'
import GridLoader from 'react-spinners/GridLoader'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      loading: false
    };
    this.timerID = 0
  }

  getStores = (input) => {
    axios
      .get('/api/search', {
        params: { name: input }
      })
      .then(resp => {
        console.log("this is the response", {});
        this.setState({
          stores: resp.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false
        })
      });
  };

  callGetStores = (e) => {
    const input = e.target.value;
    clearInterval(this.timerID);
    this.timerID = setTimeout(() => {
      this.setState({
        loading: true
      }, () => this.getStores(input))
    }, 1000)
  }


  render() {
    const override = css`
      display: block;
      margin: 10vh auto 0 auto;
    `;

    const { stores, loading } = this.state

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

        {loading ?
          (
            <div className="loader">
              <GridLoader
                loading={loading}
                css={override}
                size={50}
                color={"#9242b0"}
              />
            </div>
          ) :
          stores.length ? <SearchResults loading={loading} stores={stores} /> : <Blurb />}
      </div>
    );
  }
}

export default Home;
