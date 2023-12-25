import React from "react";
import { Route } from "react-router-dom";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import Signup from "../Signup/Signup";

const Routes = ({ cartItems, productItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) => {
   return (
      <div>
         <Route>
            <Route path="/" exact>
               <Products
                  productItems={productItems}
                  handleAddProduct={handleAddProduct}
               />
            </Route>
            <Route path="/signup" exact >
               <Signup />
            </Route>
            <Route path="/cart" exact>
               <Cart
                  cartItems={cartItems}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                  handleCartClearance={handleCartClearance} />
            </Route>
         </Route>
      </div>
   );

};
export default Routes;