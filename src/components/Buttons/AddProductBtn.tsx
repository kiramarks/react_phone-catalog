import React, { useCallback, useMemo } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems, getProducts } from '../../redux';
import { actions } from '../../redux/cart';

export const AddProductBtn = ({ productId, styleSize, productPrice }: PrimaryBtnProps) => {
  const cartItems: Product[] = useSelector(getCartItems);
  const products: Product[] = useSelector(getProducts);
  const dispatch = useDispatch();


  const handleAddingToCart = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, prodId: string) => {
      const product = products.find(p => p.id === prodId)!;

      if (e.target.checked) {
        dispatch(actions.addToCart(product, prodId, productPrice));
      } else {
        dispatch(actions.deleteFromCart(prodId, productPrice));
      }
    }, [dispatch, products, productPrice],
  );

  const isInCart = useMemo(() => (
    cartItems.some(product => product.id === productId)
  ), [cartItems, productId]);

  return (
    <label
      className={cn(
        'button-to-cart', styleSize,
      )}
      htmlFor={`button-to-cart__${productId}`}
    >
      <input
        className="button-to-cart__input"
        type="checkbox"
        id={`button-to-cart__${productId}`}
        checked={isInCart}
        onChange={(e) => handleAddingToCart(e, productId)}
      />
      <span className="button-to-cart__title">
        {isInCart ? 'Remove from cart' : 'Add to cart'}
      </span>
    </label>
  );
};
