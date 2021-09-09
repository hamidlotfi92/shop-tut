// since each form an input needs alable and input, we create a reuable component. that can handle diifrent functionality.

// react
import React from 'react';

// styles
import './form-input.styles.scss';




const FormInput=({handleChange,lable,...otherProps})=>(
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/> 
        {
            lable ? 
            (<lable className={`${otherProps.value.length ? 'shrink' :''} form-input-lable`}>{lable}</lable>)
            : null
        }
    </div>
)

export default FormInput;