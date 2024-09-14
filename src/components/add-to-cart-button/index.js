"use client";

import { addToCart, removeFromCart } from "@/store/slices/cart-slice";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";

function AddToCartButton({ productItem }) {
  const cartItems = useSelector((state) => state.cart.cartItems); // Directly access cartItems
  const dispatch = useDispatch();

  const isInCart = cartItems.some((item) => item.id === productItem.id); // Check if the product is already in the cart

  // Add to cart handler
  function handleAddToCart() {
    dispatch(addToCart(productItem));
  }

  // Remove from cart handler
  function handleRemoveFromCart() {
    dispatch(removeFromCart(productItem.id));
  }

  return (
    <div className="mt-8 max-w-md">
      <Button
        type="button"
        onClick={() => (isInCart ? handleRemoveFromCart() : handleAddToCart())}
      >
        {isInCart ? "Remove from cart" : "Add to cart"}
      </Button>
    </div>
  );
}

export default AddToCartButton;
