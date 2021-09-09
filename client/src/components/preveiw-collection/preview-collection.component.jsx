// making each category existed in collectionOverwiew component. only shown 4 item of each collection


//react
import React from "react";
import { withRouter } from 'react-router-dom';

//styles
import './preview-collection.styles.scss';

//components
import CollectionItem from "../collection-item/collection-item.component";





const PreviewCollection=({title,items,history})=>(
    <div className='collection-preview'>
        <h1 className='title' onClick={() => history.push(`/shop/${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item,idx)=>idx<4).map((item)=>(
                    <CollectionItem key={item.id} item={item}/>
                ))
            } 
        </div>
    </div>
);

export default withRouter(PreviewCollection);