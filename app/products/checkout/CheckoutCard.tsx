import React from "react";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
} from "../../../redux/Features/basket/basketSlice";

type Props = {
  id: number;
  title: string;
  price: number;
  rating: number;
  description: string;
  category: string;
  image: string;
  hasPrime: any;
};

function CheckoutCard({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}: Props) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    // push items into redux
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    // remove item from redux
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="checkout-card-container">
      <div className="checkout-card-content-left">
        <img src={image} alt="" />
        <div className="checkout-card-content-detail dark:text-gray-900">
          <p>{title}</p>
          <span>${price}</span>
        </div>
      </div>
      <div className="checkout-card-content-right">
        <button onClick={addItemToBasket}>+</button>
        <button onClick={removeItemFromBasket}>-</button>
      </div>
    </div>
  );
}

export default CheckoutCard;
