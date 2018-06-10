import React from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import StoreTiles from "./StoreTiles";



  
  ///store/:subcategoryID

class Subcategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          storeList: [],
        };
      };

      handleOnClick = (e) => {
        this.getStoreList(e.target.id)
        this.props.handleSubcategoryId(e.target.id)

      }

      getStoreList = (id) => {
        axios.get(`/store/${id}`) 
         .then((resp) => {
          console.log('this the id', resp);
          this.setState({storeList: resp.data.data})
        })
        .catch((error) => {
          console.log(error);
        });
      }

    render(){
        console.log('this is the subcategory state', this.state)
          return (
            <div className="Subcategories">
            {this.props.subcategories.map((elem, i) => {
              return (
                <Link to ={`/food/${elem.name}`}>
                <div className='tile' key={i}>   
               <img src={elem.image} alt={`/${elem.name}`} className='tileImage'  id={elem.id} onClick={this.handleOnClick}/>
               <div className='tileName'> {elem.name}</div>
                </div>
                </Link>
              )
            }
            )}
            <Link to = "/food/Restaurants/storeList"> click here </Link>
            <Route path="/storeList" render={this.renderStoreList} />

         </div> 
          );
        };
      }
      
export default Subcategories;