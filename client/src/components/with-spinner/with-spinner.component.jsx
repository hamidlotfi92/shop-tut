//the following HOC component shows a css loading spinner that gets a component and if it has  isLoading as prop it shown the sppiner, otherwise shows the component


// React
import React from "react";

//styles
import './with-spinner.styles.scss';

const WithSpinner = WrappedComponent =>{
        const Spinner = ({ isLoading, ...otherProps}) => {
        return isLoading ? (
            <div>
            <div className='container'>
 
            <div className='spinner-container'>
               <div className="spinner-path">
                 <div></div>
                 <div></div>
                 <div></div>
                 <div></div>
              </div>
            </div>
            
          </div>
          
          
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="gooey">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>
          </svg>
            </div>
        ) : (
            <WrappedComponent {...otherProps}/>
        )
    }
    return Spinner;
}

export default WithSpinner;