// this component is in charg of showing each item as individual by getting an item and adding additem functionality


//Ract
import React from "react";

// redux
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

//components
import CustomButton from "../custom-button/custom-buton.component";

//styles
import './collection-item.styles.scss';



const CollectionItem=({item,addItem})=>{
    const{ name, price, imageUrl}=item;
    return(
    <div className='collection-item'>
        <div className='image' style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            
            <CustomButton className='custom-button'  onClick={()=>addItem(item)} inverted >ADD TO CART</CustomButton>
            
                
    </div>  

)}

// mapDispatchToProps dispatches data to redux store 
const mapDispathcToProps=dispatch=>({
    addItem:item => dispatch(addItem(item))
})


//connect HOC wraps around component to redux
export default connect(null,mapDispathcToProps)(CollectionItem);