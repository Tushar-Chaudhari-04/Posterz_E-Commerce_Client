import {createSlice} from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"cartSlice",
    initialState:{
        cart:[]
    }, 
    reducers:{
        addToCart:(state, action) => {
           const product=action.payload;
           const currentItem=product?{
                id:product?.id,
                title:product?.attributes?.title,
                key:product?.attributes?.key,
                image:product?.attributes?.image.data.attributes.url,
                price:product?.attributes?.price,
            }:action.payload
           const index=state.cart.findIndex(item=>item.id===currentItem.id);
           if(index===-1){
            state.cart.push({...currentItem,quantity:1})
           }else{
            state.cart[index].quantity+=1;
           }
        },
        removeFromCart:(state, action) => {
           let currentItem=null;
           if(action?.payload?.attributes){
            currentItem=action?.payload?.attributes;
           }else{
            currentItem=action?.payload;
           }
           console.log("remove",currentItem);
           
           const index=state.cart.findIndex(item=>item.key===currentItem.key);
           if(index === -1) return;
           if(state.cart[index].quantity===1){
            state.cart=state.cart.filter(item=>(item.key!==currentItem.key));
           }else{
            state.cart[index].quantity-=1;
           }
        },
        removeItem:(state, action) => {
            let currentItem=null;
            if(action?.payload?.attributes){
             currentItem=action?.payload?.attributes;
            }else{
             currentItem=action?.payload;
            }
            console.log("remove",currentItem);
            
            const index=state.cart.findIndex(item=>item.key===currentItem.key);
            if(index === -1) return;
            state.cart=state.cart.filter(item=>(item.key!==currentItem.key));
         },
         // create an action to removeCartItem
         resetCart: (state, action) => {
            state.cart = []
        }
    }
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart,removeItem,resetCart } = cartSlice.actions;