import React from 'react';
import MenuItem from'../menu-item/menu-item.componen';
import './directory.styles.scss'
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux';

const Directory =({sections})=>(
        <div className="directory-menu">
        {
            sections.map(({id, ...otherprops})=>(
                <MenuItem key={id} {...otherprops}/>
            ))
        }
        </div>
    )
        
  
const mapStateToProps=createStructuredSelector({
    sections:selectDirectorySections
})
export default connect(mapStateToProps)(Directory);