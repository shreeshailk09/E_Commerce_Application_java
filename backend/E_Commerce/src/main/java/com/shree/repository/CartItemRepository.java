package com.shree.repository;

import com.shree.model.Cart;
import com.shree.model.CartItem;
import com.shree.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CartItemRepository extends JpaRepository<CartItem,Long> {

    @Query("SELECT ci from CartItem ci where ci.cart=:cart and ci.product=:product and ci.size=:size and ci.userId=:userId")
    public CartItem isCartItemExist(@Param("cart") Cart cart,
                                    @Param("product")Product product,
                                    @Param("size") String size,
                                    @Param("userId") Long userId);
}
