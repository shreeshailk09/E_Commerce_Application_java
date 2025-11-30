package com.shree.controller;

import com.shree.exception.ProductException;
import com.shree.exception.UserException;
import com.shree.model.Cart;
import com.shree.model.User;
import com.shree.request.AddItemRequest;
import com.shree.response.ApiResponse;
import com.shree.service.CartItemService;
import com.shree.service.CartService;
import com.shree.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @Autowired
    private CartItemService cartItemService;

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization")String jwt) throws UserException{
        User user=userService.findUserprofileByJwt(jwt);
        Cart cart=cartService.findUserCart(user.getId());

        return new ResponseEntity<Cart>(cart, HttpStatus.OK);
    }

    @DeleteMapping("/{cartItemId}")
    public ResponseEntity<ApiResponse> deleteCartItem(@RequestHeader("Authorization")String jwt,
                                               @PathVariable Long cartItemId) throws UserException,ProductException{
        User user=userService.findUserprofileByJwt(jwt);
        cartItemService.removeCartItem(user.getId(),cartItemId);
        ApiResponse res=new ApiResponse();
        res.setStatus(true);
        res.setMessage("item deleted successfully");
        return new ResponseEntity<>(res,HttpStatus.OK);
    }

    @PutMapping("/add")
    public ResponseEntity<ApiResponse> addItemToCart(@RequestBody AddItemRequest req,
                                                     @RequestHeader("Authorization") String jwt) throws UserException, ProductException{
        User user=userService.findUserprofileByJwt(jwt);
        cartService.addCartItem(user.getId(),req);
        ApiResponse res=new ApiResponse();
        res.setMessage("Item added to cart");
        res.setStatus(true);
        return new ResponseEntity<>(res,HttpStatus.OK);
    }
}
