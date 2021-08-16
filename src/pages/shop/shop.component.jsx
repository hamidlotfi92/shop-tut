import React from "react";

import PreviewCollection from "../../components/preveiw-collection/preview-collection.component";

import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections:SHOP_DATA
        }
    }

    render(){
        const{collections}=this.state;
        return(<div className='shop-page'> 
                {
                    collections.map(({id, ...otherprops})=>(
                        <PreviewCollection key={id} {...otherprops}/>
                    ))
                }
        </div>)
    }
}

export default ShopPage;