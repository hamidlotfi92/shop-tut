//this component is only used in homeplage to show all categories

//React
import React from 'react';

//Redux
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux';

//components
import MenuItem from'../menu-item/menu-item.componen';

//styles
import './directory.styles.scss'




const Directory =({sections})=>(
        <div className="directory-menu">
        {
            sections.map(({id, ...otherprops})=>(
                <MenuItem key={id} {...otherprops}/>
            ))
        }
        </div>
    )
        
// mapStateToProps gets data from redux store or selectors
const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySections
})

//connect HOC wraps around component to redux
export default connect(mapStateToProps)(Directory);