package com.shree.service;

import com.shree.exception.ProductException;
import com.shree.model.Cart;
import com.shree.model.User;
import com.shree.request.AddItemRequest;


public interface CartService {

    public Cart createCart(User user);

    public String addCartItem(Long userId, AddItemRequest req) throws ProductException;

    public Cart findUserCart(Long userId);


}
