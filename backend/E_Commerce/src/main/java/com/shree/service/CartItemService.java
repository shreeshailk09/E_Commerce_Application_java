package com.shree.service;

import com.shree.exception.CartItemException;
import com.shree.exception.UserException;
import com.shree.model.Cart;
import com.shree.model.CartItem;
import com.shree.model.Product;
import com.shree.model.User;

public interface CartItemService {
    public CartItem createCartItem(CartItem cartItem);
    public CartItem updateCartItem(Long userId,Long id,CartItem cartItem) throws CartItemException, UserException;

    public CartItem isCartItemExist(Cart cart, Product product,String size,Long userId);
    public void removeCartItem(Long userId,Long cartItemId)throws CartItemException,UserException;
    public CartItem findCartItemById(Long cartItemId) throws CartItemException;
    public CartItem updateCartItemQuantity(Long userId, Long cartItemId, Integer quantity)
            throws CartItemException, UserException;


}

