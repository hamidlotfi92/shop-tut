import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import PreviewCollection from '../preveiw-collection/preview-collection.component';
import './collections-overview.styles.scss';

const CollectionsOverview =({collections})=>(
    <div className='collections-overview'>
    {
        collections.map(({id, ...otherprops})=>(
            <PreviewCollection key={id} {...otherprops}/>
        ))
        }
    </div>
)

const mapStateToProps=createStructuredSelector({
    collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)