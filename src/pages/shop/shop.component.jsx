import React, { Component } from "react";
import { connect } from "react-redux";
import PreviewCollection from "../../components/preveiw-collection/preview-collection.component";
import CollectionsOverview from '../../components/collection-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import { firestore, converCollectionSnapshotToMap } from "../../firebase/firebase.utils";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {createStructuredSelector} from 'reselect'
import { Route } from "react-router-dom";
import{ updateCollections } from '../../redux/shop/shop.actions'

//wrapping both Overview and CollectionPage with Spinner HOC
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPagewithSpinner = WithSpinner(CollectionPage);
// React-router passmatch, location and history to compnent we pass to Route component
class ShopPage extends React.Component{
        constructor(){
                super();
                this.state= {
                        loading: true
                }
        }
        unsubscribeFromSnapshot = null;
        componentDidMount(){
                const {updateCollections}=this.props;
                const collectionRef = firestore.collection('collections');
           
                 collectionRef.get().then(async snapshot=>{
                         
                       const collectionsMap = converCollectionSnapshotToMap(snapshot);
                        updateCollections(collectionsMap); 
                        this.setState({ loading: false});
                        
                })
        }
        render(){
        const {match} = this.props
        const {loading} = this.state
        

        return(
                
          <div className='shop-page'>   
               <Route exact path={`${match.path}`} render={props =>
                (
                        <CollectionsOverviewWithSpinner isLoading={loading} {...props} />)}/>
                      { 
                       //passing :collectionId id afte path allows us to get whatever writen instead of it like a parameter in CollectionPage component's match
                       }
                <Route exact path={`${match.path}/:collectionId`} render={(props)=><CollectionPagewithSpinner isLoading={loading} {...props} />}/> 
        </div>
                
        )
}

}
const mapDispatchToProps = dispatch =>({
updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null,mapDispatchToProps)(ShopPage);