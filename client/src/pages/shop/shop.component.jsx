import React, { useEffect } from "react";
import { connect } from "react-redux";
import CollectionsOverviewContainer from "../../components/collection-overview/xollection-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import { Route } from "react-router-dom";

import{ fetchCollectionStart } from '../../redux/shop/shop.actions'
//FOR USING THUNK import{ fetchCollectionStartAsync } from '../../redux/shop/shop.actions'



// React-router passmatch, location and history to compnent we pass to Route component
const ShopPage = ({fetchCollectionStart, match, isLoading}) => {
        
        useEffect(() => {
                
                fetchCollectionStart();
        // IF we return a function here i will act as compoentWillUnmount. and it's called clean up function
        },[fetchCollectionStart])
            //FOR USING THUNK const{fetchCollectionStartAsync} = this.props;

           //FOR USING THUNK fetchCollectionStartAsync();
  
        return(
                
          <div className='shop-page'>   
               <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
                      { 
                       //passing :collectionId id afte path allows us to get whatever writen instead of it like a parameter in CollectionPage component's match
                       }
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer}/> 
        </div>
                
        )
}


const mapDispatchToProps = dispatch =>({
fetchCollectionStart: () => dispatch(fetchCollectionStart())
//FOR USING THUNK fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

const mapStateToProps = createStructuredSelector({
        isLoading: selectIsCollectionFetching
    })
    

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);