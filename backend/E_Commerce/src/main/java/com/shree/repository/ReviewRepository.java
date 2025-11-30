package com.shree.repository;

import com.shree.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review,Long> {

    @Query("SELECT r from Review r where r.product.id=:productId")
    public List<Review> getAllProductReviews(@Param("productId") Long productid);
}
