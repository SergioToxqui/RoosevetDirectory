import React from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import StoreTiles from "./StoreTiles";


  
 

class StoreList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          store: [],
        };
      };

      handleOnClick = (e) => {
        this.getStore(e.target.id)
      }

      getStore = (id) => {
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
            <div className="Subcategories"><h1> this is working</h1>
            {this.props.storeList.map((elem, i) => {
              return (

                <Link to ={`/food/${elem.name}`}>
                <div className='tiles' key={i}>   
               <img src={elem.photo} alt={`/${elem.name}`} className='tileImage'  id={elem.id} onClick={this.handleOnClick}/>
               <span className='tileName'> {elem.name}</span>
                </div>
                </Link>
              )
            }
            )}
         </div> 
          );
        };
      }
      
export default StoreList;