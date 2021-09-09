// this component previews all the item collections row by row is shop page

// React
import React from 'react';

// redux
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

// components
import PreviewCollection from '../preveiw-collection/preview-collection.component';

//styles
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


// mapStateToProps gets data from redux store or selectors
const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
})

//connect HOC wraps around component to redux
export default connect(mapStateToProps)(CollectionsOverview)