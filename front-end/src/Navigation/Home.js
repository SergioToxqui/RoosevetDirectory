import React from "react";
import Blurb from "./Blurb";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: ''
    };
  }

  handleSearchTerms = (e) => {
    this.setState({
      searchTerms: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { searchTerms } = this.state
    this.props.history.push(`/search?q=${searchTerms}`)
  }

  render() {
    return (
      <div className="home" >
        <div className="jumbotron">
          <p className="jumbotron__cta">
            To explore local businesses click on a category above or search here.
          </p>
          <form className="search-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="search-form__field"
              placeholder="Search for a specific business."
              onChange={this.handleSearchTerms}
            />
            <input type="submit" value="Search" className="search-form__button" />
          </form>
        </div>
        <Blurb />
      </div>
    );
  }
}
export default Home;
