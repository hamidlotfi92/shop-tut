import React, { Component } from "react";
import { connect } from "react-redux";
import PreviewCollection from "../../components/preveiw-collection/preview-collection.component";
import CollectionsOverview from '../../components/collection-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

import {createStructuredSelector} from 'reselect'
import { Route } from "react-router-dom";

// React-router passmatch, location and history to compnent we pass to Route component
const ShopPage =({match})=>(
        <div className='shop-page'> 
               <Route exact path={`${match.path}`} component={CollectionsOverview}/>
               { 
                //passing :collectionId id afte path allows us to get whatever writen instead of it like a parameter in CollectionPage component's match
               }
               <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
)



export default ShopPage;