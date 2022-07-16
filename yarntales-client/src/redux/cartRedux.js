
import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0 
     
    
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += action.payload.quantity;
      
      let flag = false 
      for(let i = 0 ; i<state.products.length ; i+=1){ 
        if(state.products[i]._id === action.payload._id){
          state.products[i].quantity += action.payload.quantity ; 
          flag = true 
        }
      }
      if(!flag){
        state.products.push(action.payload) ; 
      }

      state.total += action.payload.price * action.payload.quantity;

       

    },
    removeProduct: (state, action) => {
      state.quantity += 1*action.payload.sign ;
      state.products =  state.products.filter(prod =>  {
        if(prod._id === action.payload._id){
          prod.quantity += 1*action.payload.sign ; 
        }
        if(prod.quantity <= 0) return false 
        return true
      }) ; 
      state.total += action.payload.price*action.payload.sign ;
    },
    placeOrder: (state, action) => {
      state.quantity = 0 ;
      state.products =  []; 
      state.total  = 0 ;
    },
  },
});

export const { addProduct  , removeProduct , placeOrder} = cartSlice.actions;
export default cartSlice.reducer;