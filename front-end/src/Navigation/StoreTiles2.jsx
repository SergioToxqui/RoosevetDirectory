import React from "react";
import axios from "axios";





class StoreTiles2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
    };
  };

  getAllStores = () => {
  axios.get('/store/1') 
   .then((resp) => {
    console.log('this is the response', resp);
    this.setState({stores: resp.data.data})
  })
  .catch((error) => {
    console.log(error);
  });
}

componentDidMount(){
  this.getAllStores()
}

      render(){
  const stores= this.state.stores
  console.log('this is the stores', stores)
    return (
      <div className="store-tile">
      <h4> this is the store tiles component</h4>
         {stores.map((elem, i) => {
           return (
             <div className='tiles' key={i}>
            <img src={elem.image} alt='tile image' className='tileImage'/>
            <h2 className='tileName'> {elem.name}</h2>
            <h3 className='tileType'> {elem.type}</h3>
            <h2 className='tilePhone'> {elem.phone}</h2>
             </div>
           )
         }
         )}
      </div> 
    );
  };
}

  export default StoreTiles2;