import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import GridLoader from 'react-spinners/GridLoader'
import { css } from '@emotion/core'

const Search = (props) => {
  const [resultsByName, setResultsByName] = useState([])
  const [resultsByKeywords, setResultsByKeywords] = useState([])
  const [loading, setLoading] = useState(true)
  const { search } = props.location


  useEffect(() => {
    const searchBusinesses = async () => {
      try {
        let res = await axios.get(`/api/biz${search}`)
        const { resultsByName, resultsByKeywords } = res.data.payload

        setResultsByName(resultsByName)
        setResultsByKeywords(resultsByKeywords)
        setLoading(false)

      } catch (error) {
        console.log(error);
        setLoading(false)
      };
    };

    searchBusinesses()
  }, [search])

  const override = css`
    display: block;
    margin: 10vh auto 0 auto;
  `;

  if (loading) {
    return (
      <div className="loader">
        <GridLoader
          loading={loading}
          css={override}
          size={50}
          color={"#9242b0"}
        />
      </div>
    )
  } else {
    return (
      <SearchResults
        loading={loading}
        resultsByKeywords={resultsByKeywords}
        resultsByName={resultsByName}
      />
    );
  }
}

export default Search;
