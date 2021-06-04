import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Link } from "react-router-dom";
import "../Stylesheets/BusinessCategories.css"

const BusinessCategories = (props) => {
  const { category } = props.match.params

  const [categoryData, setCategoryData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getCategoryInfo = async (category) => {
      try {
        const { data } = await axios.get(`/api/categories/${category}`)
        setCategoryData(data.payload.category)
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      };
    }

    getCategoryInfo(category);
  }, [category])

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <div className="category-menu">
        <Link to={`/${categoryData.name}`}>
          <div className="category-menu__title" style={{ backgroundImage: `url(${categoryData.image_url})` }}>
            {categoryData.name.toUpperCase()}
          </div>
        </Link>
        <div className="category-menu__description">{categoryData.description}</div>
      </div>
      <Switch>
        {/* <Route exact path="/food" render={this.renderSubcategories} /> */}
        {/* <Route path="/food/:subcategory" component={StoreTiles} /> */}
      </Switch>
    </div>
  );
}

export default BusinessCategories;
