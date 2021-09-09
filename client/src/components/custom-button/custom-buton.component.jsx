// this component uses  styled library that is css in js.
//the button is used in multiple places and according to props it gets, the style will change.

//reacr
import React from 'react';

//styles
import { CustomButtonContainer } from './custom-button.styles';


const CustomButton=({children,...props})=>(

    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
)


export default CustomButton;