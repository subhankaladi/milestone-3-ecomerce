"use client";

import { twMerge } from "tailwind-merge";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppersSlice";
import { ProductData } from "../../types";

interface Props {
  className?: string;
  item: ProductData;
}

const AddToCartButton = ({ className, item }: Props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <button
      onClick={handleAddToCart}
      className={twMerge(
        "bg-accent text-white w-full py-2 border border-px border-accent hover:bg-blue-600 hover:border-blue-800 hoverEffect font-semibold tracking-wide flex items-center justify-center gap-1",
        className
      )}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
