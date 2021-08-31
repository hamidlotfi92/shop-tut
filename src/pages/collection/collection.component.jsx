import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import './collection.styles.scss';
import { addItem } from "../../redux/cart/cart.actions";

const CollectionPage=({ collection})=>{
    
    if(collection){
        const{title,items}=collection;
    return(
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item=><CollectionItem key={item.id} item={item} />)
            }
        </div>
    </div>
    )
    }else{
        return(
            <h1>Connection to server seem to be lost. Please Use VPN And try again</h1>
        )
        
    }
    
    
    
}

//first argument is the state, that is over all reducer state, second argument is ownprops which is the props from the component we wrap in connect
const mapStateToProps=(state, ownProps)=>({
    //this (state is necessary becuase unlike other selectors, this one needs a part of the state depending on the url parameter )
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);