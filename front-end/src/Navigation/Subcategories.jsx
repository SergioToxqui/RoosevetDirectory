import React from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import StoreTiles from "./StoreTiles";
import StoreList from "./StoreList"


  
  ///store/:subcategoryID

class Subcategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          storeList: [],
        };
      };

      renderStoreList = () => {
        return (<StoreList storeList = {this.state.storeList} />)
      }

      handleOnClick = (e) => {
        this.getStoreList(e.target.id)
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
                <div className='tiles' key={i}>   
               <img src={elem.image} alt={`/${elem.name}`} className='tileImage'  id={elem.id} onClick={this.handleOnClick}/>
               <span className='tileName'> {elem.name}</span>
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